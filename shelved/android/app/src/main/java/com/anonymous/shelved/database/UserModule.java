package com.anonymous.shelved.database;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import androidx.room.Room;
import androidx.room.RoomDatabase;
import androidx.room.Database;
import androidx.room.Dao;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import com.anonymous.shelved.database.AppDatabase;
import com.anonymous.shelved.database.UserDAO;
import com.anonymous.shelved.database.User;




public class UserModule extends ReactContextBaseJavaModule {

    public UserModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UserModule";
    }

    @ReactMethod
    public void addUser(String name, String email, Promise promise) {
        AppDatabase db = AppDatabase.getDatabase(getReactApplicationContext());
        UserDAO userDao = db.userDao(); 
        User user = new User(name, email); // Make sure User class constructor matches these parameters
        userDao.insertUser(user);
        promise.resolve(user.getId());  // Return the new user ID
    }
}
