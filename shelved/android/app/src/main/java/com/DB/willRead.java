import androidx.room.ForeignKey;

@Entity(tableName = "willRead",
    foreignKeys = @ForeignKey(
        entity = User.class,
        parentColumns = "userInfo",
        childColumns = "userInfo",
        onDelete = ForeignKey.CASCADE))



@Entity(tableName = "willRead")
public class Pokemon {
    @PrimaryKey(autoGenerate = true)

    @ColumnInfo(name = "id")
    private int id;
    @ColumnInfo(name = "bookTitle")
    private String userInfo;
    @ColumnInfo(name = "author")
    private String userInfo;
     @ColumnInfo(name = "userInfo")
     private String userInfo;

    public willRead(String bookTitle, Double author) {
        this.bookTitle = bookTitle;
        this.author = author;
        this.userInfo = userInfo;
    }
    public int getId() { return id; }
    public String getUserInfo() { return userInfo; }
    public int getAuthor() { return author; }
    public int getBookTitle() { return bookTitle; }


    public void setId(int id) { this.id = id; }
    public void setUserInfo(String userInfo) { this.userInfo = userInfo; }
    public void setAuthor(int id) { this.author = author; }
    public void setBookTitle(String bookTitle) { this.bookTitle = bookTitle; }
}
