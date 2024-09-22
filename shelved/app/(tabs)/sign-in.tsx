import { View, Text } from 'react-native';
import * as React from 'react';
import { useEffect, useState } from "react";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { NativeModules } from 'react-native';

export default function Index() {
  const [userName, setUserName] = useState<string | null>(null); 
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '737955579318-sv5t7ugc7qdarn71csel7gn7ust72osh.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true,
    });
  }, []);

  const localsignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
  
      console.log("Full userInfo response:", userInfo);
  
      if (userInfo && userInfo.user) {
        const { id, name, email } = userInfo.user;
        console.log("User Info:", { id, name, email });
        
        setUserName(name); 
        NativeModules.UserModule.saveUser(id, name, email);
      } else if (userInfo && userInfo.data && userInfo.data.user) {
        
        const { id, name, email } = userInfo.data.user;
        console.log("User Info from data:", { id, name, email });
        
        setUserName(name); 
        NativeModules.UserModule.saveUser(id, name, email);
      } else {
        console.log("Google sign-in did not return user info");
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing in');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available');
      } else {
        console.log('Some other error happened');
        console.log(error.message);
        console.log(error.code);
      }
    }
  };

  return (
    <View>
      {userName ? (
        <Text>Welcome, {userName}!</Text> 
      ) : (
        <GoogleSigninButton
          style={{ width: 192, height: 48, marginTop: 30 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={localsignIn}
        />
      )}
    </View>
  );
};
