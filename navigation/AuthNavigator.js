import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { LOGIN } from '../constants/routeNames';
import { REGISTER } from './../constants/routeNames';
import SignUp from './../screens/Register/index';
import Login from './../screens/Login/index';



const AuthNavigator = () => {
     const AuthStack = createStackNavigator()
     return(
          <AuthStack.Navigator screenOptions={{ headerShown: false }}>
               <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
               <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
          </AuthStack.Navigator>
     );
}

export default AuthNavigator;