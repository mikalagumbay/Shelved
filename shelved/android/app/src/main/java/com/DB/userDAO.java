import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao 
public interface UserDAO {
    @Insert
    void instertUser(User user);
    @Update
    void updateUser(User user);
    @Delete
    void deleteUser(User user);

    @Query ("SELECT * FROM User WHERE id = :id")
    User getUserById(int id);

    @Query("SELECT * FROM User")
    List <User> getAllUsers();
    
}