import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

class shelvedPackage(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext){
    override fun getName(): String {
        return "shelvedPackage"
    }

    @ReactMethod
    fun getAllUsers(promise: Promise){
        try{
            val userList = DatabaseClient.getInstance(ReactApplicationContext).getAppDatabase().userDAO().getAllUsers()
            promise.resolve(userList)
        }catch (e: Exception){
            promise.reject("Error", e.message)
        }
    }
}