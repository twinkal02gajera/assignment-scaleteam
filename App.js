import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './src/home';
import AboutUs from './src/aboutUs';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
   
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{headerShown:false,tabBarActiveBackgroundColor:'#cccccc',tabBarInactiveBackgroundColor:'#2f2f37',tabBarActiveTintColor:'#fff',tabBarLabelStyle:{fontSize:20}}}
      
      >
        <Tab.Screen name="Home" component={Home} options={{}}/>
        <Tab.Screen name="AboutUs" component={AboutUs} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

