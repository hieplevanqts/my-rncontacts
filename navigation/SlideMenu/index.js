// import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { 
     View, 
     Text, 
     Image, 
     TouchableOpacity,
     Alert 
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {SETTINGS} from '../../constants/routeNames';
import Container from '../../components/Common/container'
import logoutUser from '../../context/actions/auth/logoutUser'
import styles from './styles'
import Icon from './../../components/Common/Icon';



const SideMenu = ({navigation, authDispatch}) => {

     const handleLogout = ()=>{
          navigation.toggleDrawer();
          Alert.alert('Logout', 'Are you sure you want to logout ?', [
               {
                    text: 'Cancel',
                    onPress: ()=>{}
               },
               {
                    text: 'OK',
                    onPress: ()=>{
                         logoutUser()(authDispatch);
                    }
               },
          ])          
         
     }

     const menuItems = [
          {
               icon: <Icon type="fontisto" size={17} name="player-settings" />, 
               name: "Settings",
               onPress: () => {
                    navigation.navigate(SETTINGS);
               },
          },
          {
               icon: <Icon type="material" size={17} name="logout" />, 
               name: "Logout",
               onPress: handleLogout,
          },
     ];

     return (
          <SafeAreaView>
                    <Container>
                         <Image
                              height={70}
                              width={70}
                              source={require('../../assets/images/logo.png')}
                              style={styles.logoImage}
                         />
                         <View style={{ paddingHorizontal: 70 }}>
                              {menuItems.map(({name, icon, onPress})=>(
                                   <TouchableOpacity onPress={onPress} key={name} style={styles.item}>
                                        <View style={styles.icon}>{icon}</View>
                                        <Text style={styles.itemText}>{name}</Text>
                                   </TouchableOpacity>
                              ))}
                         </View>
                    </Container>
               </SafeAreaView>
     )
}

export default SideMenu
