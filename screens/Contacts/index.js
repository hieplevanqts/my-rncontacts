import React, {useContext, useEffect, useRef, useState} from 'react';
import { TouchableOpacity } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import Icon from './../../components/Common/Icon';
import ContactsComponent from './../../components/ContactsComponent/index';
import { GlobalContext } from './../../context/Provider';
import getContacts from '../../context/actions/contacts/getContacts';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Contacts = ({navigation})=>{
     console.log(navigation.navigate);
     const [sortBy, setSortBy] = React.useState(null);
     const {setOptions, toggleDrawer} = useNavigation();
     const [modalVisible, setModalVisible] = useState(false);
     const contactsRef = useRef([])

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
     
     useEffect(()=>{

          const prev = contactsRef.current;
          contactsRef.current = data;
          const newList = contactsRef.current;
          if (newList.length - prev.length === 1) {
               const newContact = newList.find(
                 (item) => !prev.map((i) => i.id).includes(item.id),
               );
               navigate(CONTACT_DETAIL, {item: newContact});
             }

     }, [data.lenght])

     
     React.useEffect(() => {
          setOptions({
               headerLeft: ()=>
               <TouchableOpacity onPress={()=>{
                    toggleDrawer();
               }}>
                    <Icon type="material" style={{padding: 10}} size={25} name="menu" />
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