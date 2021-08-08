import React, {useContext, useEffect, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
// import { MaterialIcons } from '@expo/vector-icons';
import ContactsComponent from './../../components/ContactsComponent/index';
import { GlobalContext } from './../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Contacts = ({navigation})=>{
     console.log(navigation.navigate);
     const [sortBy, setSortBy] = React.useState(null);
     const {setOptions, toggleDrawer} = useNavigation();
     const [modalVisible, setModalVisible] = useState(false);

     const {
               contactsDispatch, 
               contactsState: {
                    getContacts: {data, loading}
               }} = useContext(GlobalContext)

     useEffect(()=>{
          getContacts()(contactsDispatch);
     }, [])

     const getSettings = async()=>{
          const sortPref = await AsyncStorage.getItem('sortBy');
          console.log(sortPref);
          if(sortPref){
               setSortBy(sortPref);
          }
     }

     useFocusEffect(React.useCallback(()=>{
          getSettings();
          return ()=>{
          }
     }, []));

     
     React.useEffect(() => {
          setOptions({
               headerLeft: ()=>
               <TouchableOpacity onPress={()=>{
                    toggleDrawer();
               }}>
                    {/* <MaterialIcons name="menu" size={25} style={{ padding: 10 }}></MaterialIcons> */}
               </TouchableOpacity>
          })
     }, [])
     return(
          <ContactsComponent 
               modalVisible={modalVisible} 
               setModalVisible={setModalVisible}
               data={data} 
               loading={loading}
               sortBy={sortBy}
          />
     );
}

export default Contacts;