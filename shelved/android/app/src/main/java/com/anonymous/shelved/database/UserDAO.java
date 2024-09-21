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
public interface UserDAO {
    @Insert
    void insertUser(User user);

    @Query("SELECT * FROM user")
    List<User> getAllUsers();

    @Query("SELECT * FROM user WHERE id = :userId")
    User getUserById(int userId);
}

