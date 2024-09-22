package com.anonymous.shelved.database;

import androidx.room.Entity;
import androidx.room.PrimaryKey;
import androidx.room.ForeignKey;
import androidx.room.Index;

@Entity(tableName = "library",
        foreignKeys = @ForeignKey(entity = User.class, 
        parentColumns = "dbId", 
        childColumns = "userId",
        onDelete = ForeignKey.CASCADE),
        indices = {@Index("userId")})
public class Library {
    @PrimaryKey(autoGenerate = true)
    private int id;
    
    private int userId;

    private String bookTitle;  
    private String author;  
    private boolean haveRead;
    private boolean willRead;

    
    public Library(int userId, String bookTitle, String author, boolean haveRead, boolean willRead) {
        this.userId = userId;
        this.bookTitle = bookTitle; 
        this.author = author;
        this.haveRead = haveRead;
        this.willRead = willRead;
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getUserId() {
        return userId;
    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public String getBookTitle() {
        return bookTitle;
    }
    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public boolean isHaveRead() {
        return haveRead;
    }
    public void setHaveRead(boolean haveRead) {
        this.haveRead = haveRead;
    }
    public boolean isWillRead() {
        return willRead;
    }
    public void setWillRead(boolean willRead) {
        this.willRead = willRead;
    }
}
