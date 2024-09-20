import androidx.room.Dao;
import androidx.room.Delete;
import androidx.room.Insert;
import androidx.room.Query;
import androidx.room.Update;

import java.util.List;

@Dao 
public interface HaveReadDAO {
    @Insert 
    void insertHaveRead(HaveRead haveRead);

    @Update
    void updateHaveRead(WillRead haveRead);

    @Delete
    void deleteHaveRead(WillRead haveRead);

    @Query ("SELECT * FROM haveRead WHERE userid = :userid")
    List<HaveRead> getBooksByUserId(int userid);

    @Query("SELECT * FROM willRead")
    List <HaveRead> getAllHaveRead();
    
}