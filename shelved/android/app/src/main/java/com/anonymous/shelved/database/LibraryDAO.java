package com.anonymous.shelved.database;

import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.Database;
import androidx.room.Entity;
import androidx.room.Dao;
import androidx.room.Query;
import androidx.room.PrimaryKey;
import androidx.room.Insert;



import java.util.List;

@Dao
public interface LibraryDAO {
    @Insert
    void insertLibrary(Library library);

    @Query("SELECT * FROM library")
    List<Library> getAllLibraries();

    @Query("SELECT * FROM library WHERE userId = :userId")
    List<Library> getLibraryByUserId(int userId);
}

