import * as SQLite from 'expo-lite';

const db = await SQLite.openDatabaseAsync('ReadingAppDB');
await db.execAsync(`
    PRAGMA journal_mode = WAL;
    CREATE TABLE IF NOT EXISTS USER (
    id INTEGER PRIMARY KEY NOT NULL,
    userName TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS HaveRead (
        id INTEGER PRIMARY KEY NOT NULL,
        userId INTEGER NOT NULL,
        bookTitle TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS WILLRead (
        id INTEGER PRIMARY KEY NOT NULL,
        userId INTEGER NOT NULL,
        bookTitle TEXT NOT NULL,
        FOREIGN KEY (userId) REFERENCES User(id) ON DELETE CASCADE
    );
    `);

    const userResult = await db.runAsync (
        'INSERT INTO User (userName, email, password) VALUES (?,?,?)',
        ['aaa','bbb','ccc']
    );
    console.log(userResult.lastInsertRowId, userResult.changes);

    const haveReadResult = await db.runAsync(
        'INSERT INTO HaveRead (userId, bookTitle) VALUES (?, ?)  ',
        [userResult.lastInsertRowId, 'Some Book Title']
    );
    console.log(haveReadResult.lastInsertRowId, haveReadResult.changes);

    const willReadResult = await db.runAsync(
        'INSERT INTO WillRead (userId, bookTitle) VALUES (?,?)',
        [userResult.lastInsertRowId, 'Another Book ']
    );
    console.log(willReadResult.lastInsertRowId, willReadResult.changes);

    await db.runAsync('UPDATE Uer SET userName = ? WHERE email = ?' , ['UpdatedUser', 'bbb']);
    await db.runAsync('DELETE FROM User WHERE userName = $userName', {$userName: 'UpdatedUSer'});

    const firstRow = await db.getFirstAsync('SELECT * FROM USER');
    console.log(firstRow.id, firstRow.userName, firstRow.email);

    const allRows = await db.getAllAsync('SELECT * FROM User');
    for (const row of allRows){
        console.log(row.id, row.userName, row.email);
    }

    for await (const row of db.getEachAsync('SELECT * FROM User')){
        console.log(row.id, row.userName, row.email);
    }
