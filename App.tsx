import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import { showAppRateDialog } from './components/helpers/AppRate'
import firebase from 'firebase/app'
import Home from './components/Home';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MotorsportInformation from './components/MotorsportInformation';
import { StatusBar } from 'expo-status-bar';
import { checkIfIsConnectedToNetwork } from './components/helpers/NetworkStateAlert';
import RaceInformation from './components/RaceInformation';

checkIfIsConnectedToNetwork();
LogBox.ignoreLogs(['Setting a timer']);

var firebaseConfig = {
  apiKey: "AIzaSyC0gPDQhbApope4UHc1Or31LCEmQBPvJNw",
  authDomain: "motorsportcalendar-86678.firebaseapp.com",
  databaseURL: "https://motorsportcalendar-86678-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "motorsportcalendar-86678",
  storageBucket: "motorsportcalendar-86678.appspot.com",
  messagingSenderId: "406839824857",
  appId: "1:406839824857:web:b81585470e0057c96ec9c8",
  measurementId: "G-9NRC6MGM25"
};
firebase.initializeApp(firebaseConfig);
// showAppRateDialog();

const Stack = createNativeStackNavigator();

export default function App() {
  const [state, setstate] = useState(0)
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Motorsport Calendar" }} />
        <Stack.Screen name="MotorsportInformation" component={MotorsportInformation} />
        <Stack.Screen name="RaceInformation" component={RaceInformation} options={{ title: "Race" }} />
      </Stack.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
