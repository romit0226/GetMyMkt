import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from'expo-constants'
import Home from './screens/Home';
import CreateUser from './screens/CreateUser';
import Profile from './screens/Profile';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

const myoptions= {
  title:"List of User(s)",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"#006aff"
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
        options={ myoptions }
       />
      <Stack.Screen name="Create" component={CreateUser}
         options={ {...myoptions,title:"Create User"} }
       />
      <Stack.Screen name="Profile" component={Profile}
         options={ {...myoptions,title:"Profile"} }
       />
      
    </Stack.Navigator>
    
     
    </View>
  );
}
export default  ()=>{
  return(
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',

  },
});
