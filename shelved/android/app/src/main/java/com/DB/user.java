
import androidx.room.ColumnInfo;
import androidx.room.Entity;
import androidx.room.PrimaryKey;

import java.util.Objects;



@Entity(tableName = "User")
public class User {
    @PrimaryKey(autoGenerate = true)

    @ColumnInfo(name = "id")
    private int id;
    @ColumnInfo(name = "userInfo")
    private String userInfo;
    @ColumnInfo(name = "name")
    private String name;

    public User(String userInfo, String name) {
        this.userInfo = userInfo;
        this.name = name
    }
    
    public int getId() { return id; }
    public String getUserInfo() { return userInfo; }
    public String getName() { return name; }

    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name= name; }
    public void setUserInfo(String userInfo) { this.userInfo = userInfo; }
}
