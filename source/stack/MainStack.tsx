import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/**
 * List Stack Screen
 */
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Trang chủ'}}
      />
      <Stack.Screen 
        name="SignUpScreen" 
        component={SignUpScreen} 
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
