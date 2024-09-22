package com.anonymous.shelved.database;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.anonymous.shelved.database.AppDatabase;
import com.anonymous.shelved.database.UserDAO;
import com.anonymous.shelved.database.User;
import com.anonymous.shelved.database.Library;
import com.anonymous.shelved.database.LibraryDAO;

public class UserModule extends ReactContextBaseJavaModule {

    private static final String TAG = "UserModule"; 
    public UserModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UserModule";
    }

    @ReactMethod
    public void saveUser(String id, String name, String email) {

        
        AppDatabase db = AppDatabase.getDatabase(getReactApplicationContext());
        UserDAO userDao = db.userDao();

        
        User user = new User(id, name, email);

        
        new Thread(new Runnable() {
            @Override
            public void run() {
                userDao.insertUser(user);
                Log.d(TAG, "User saved in database: " + name);
            }
        }).start();
    }
    @ReactMethod
    public void saveLibraryEntry(int userId, String bookTitle, String author, boolean haveRead, boolean willRead) {

        
        AppDatabase db = AppDatabase.getDatabase(getReactApplicationContext());
        LibraryDAO libraryDao = db.libraryDao();

        
        Library library = new Library(userId, bookTitle, author, willRead, haveRead);

        
        new Thread(new Runnable() {
            @Override
            public void run() {
                libraryDao.insertLibrary(library);
                Log.d(TAG, "Library saved in database: " + userId);
            }
        }).start();
    }
}
