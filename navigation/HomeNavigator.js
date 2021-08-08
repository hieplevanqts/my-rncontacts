import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, SETTINGS, CREATE_CONTACT, LOGOUT } from './../constants/routeNames';
import Contacts from './../screens/Contacts/index';
import CreateContact from './../screens/CreateContact/index';
import ContactDetail from './../screens/ContactDetail/index';
import Settings from './../screens/Settings/index';
import Logout from './../screens/Logout/index';



const HomeNavigator = () => {
     const HomeStack = createStackNavigator()
     return(
          <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
               <HomeStack.Screen 
                    name={CONTACT_LIST} 
                    component={Contacts} 
                    options={{ headerLeft:()=><Text style={{ padding:10 }}>NAV</Text> }}>
               </HomeStack.Screen>
               <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail}></HomeStack.Screen>
               <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
               <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
               <HomeStack.Screen name={LOGOUT} component={Logout}></HomeStack.Screen>
          </HomeStack.Navigator>
     );
}

export default HomeNavigator;