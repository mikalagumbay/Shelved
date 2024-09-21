package com.anonymous.shelved.database;

import android.util.Log;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.anonymous.shelved.database.AppDatabase;
import com.anonymous.shelved.database.UserDAO;
import com.anonymous.shelved.database.User;

public class UserModule extends ReactContextBaseJavaModule {

    private static final String TAG = "UserModule"; // Add the TAG for logging

    public UserModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UserModule";
    }

    @ReactMethod
    public void saveUser(String id, String name, String email) {

        // Get the database instance
        AppDatabase db = AppDatabase.getDatabase(getReactApplicationContext());
        UserDAO userDao = db.userDao();

        // Use the constructor to create a new User object with parameters
        User user = new User(id, name, email);

        // Save the user in the database in a background thread
        new Thread(new Runnable() {
            @Override
            public void run() {
                userDao.insertUser(user);
                Log.d(TAG, "User saved in database: " + name);
            }
        }).start();
    }
}
