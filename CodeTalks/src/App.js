import React, { useEffect, useState } from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";
import auth from '@react-native-firebase/auth';
import Rooms from "./pages/Rooms/Rooms";
import Messages from "./pages/Messages/Messages";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from "./pages/auth/Login";
import Sign from "./pages/auth/Sign";

const Stack = createNativeStackNavigator();

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);


  const AuthStack = () => {
  return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
  )
}
return (
  <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
        <Stack.Screen name="AuthStacksPage" component={AuthStack} 
        options={{headerShown: false}}/>
        ) : (
        <>
        <Stack.Screen name="RoomsPage" component={Rooms} 
        options={{
          title: "Odalar",
          headerTitleAlign: "center",
          headerTintColor: '#FF7518',
        }}/>
        <Stack.Screen name="MessagesPage" component={Messages} 
        options={({route}) => ({
          title: route.params.item.text,
          headerTitleAlign: "center",
          headerTintColor: '#FF7518',
          headerRight: () => (
            <Icon 
            name="logout" 
            size={30} 
            color='#FF7518' 
            onPress={() => auth().signOut()} />
          ),
        })}/>
        </>
        )}
      </Stack.Navigator>
    <FlashMessage position="top" />
  </NavigationContainer>
)
}


export default App;