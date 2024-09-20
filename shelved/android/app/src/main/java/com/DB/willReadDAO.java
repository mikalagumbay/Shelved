import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao 
public interface WillReadDAO {
    @Insert 
    void insertWillRead(WillRead willRead);

    @Update
    void updateWillRead(WillRead willRead);

    @Delete
    void deleteWillRead(WillRead willRead);

    @Query ("SELECT * FROM haveRead WHERE userid = :userid")
    List<HaveRead> getBooksByUserId(int userid);

    @Query("SELECT * FROM willRead")
    List <WillRead> getAllWillRead();
    
}