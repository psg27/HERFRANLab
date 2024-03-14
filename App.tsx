import React from 'react';
import {View, Button, Platform, StatusBar} from 'react-native';
import notifee, { AuthorizationStatus } from '@notifee/react-native';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {

  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notificación nueva!',
      body: 'Tienes una nueva notificacion, inicia sesión para verla',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
        sound: 'default',
      },
    });
  }
  
  return (
    <View style={{flex:1}}>
    <WebView source={{uri: 'https://laboratorio-app.vercel.app/login'}} />
  </View>
  );
}

export default App;
