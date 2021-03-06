import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routeNames';
import SideMenu from './SlideMenu/index';
import { GlobalContext } from './../context/Provider';


const getDrawerContent = (navigation, authDispatch) => {
     return <SideMenu 
               navigation={navigation} 
               authDispatch={authDispatch}
          />;
}

const DrawerNavigator = () => {
     const Drawer = createDrawerNavigator();
     const {authDispatch} = React.useContext(GlobalContext);

     return(
          <Drawer.Navigator 
               drawerType="slide" 
               drawerContent={({navigation})=>getDrawerContent(navigation, authDispatch)}
          >
               <Drawer.Screen 
                    name={HOME_NAVIGATOR} 
                    component={HomeNavigator}

               ></Drawer.Screen>
          </Drawer.Navigator>
     );
}

export default DrawerNavigator;