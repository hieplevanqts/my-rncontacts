import React, { useEffect, useContext } from 'react';
import { Text, View, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import ContactDetailsComponent from './../../components/ContactDetailsComponent/index';
import Icon from './../../components/Common/Icon/index';
import colors from './../../assets/themes/colors';
import {GlobalContext} from '../../context/Provider';
import deleteContact from './../../context/actions/contacts/deleteContact';
import {CONTACT_LIST} from './../../constants/routeNames';




const ContactDetail = ()=>{
     const {params : {item = {}} = {}} = useRoute();
     const {
          contactsDispatch,
          contactsState: {
            deleteContact: {loading},
          },
        } = useContext(GlobalContext);

     const {setOptions, navigate} = useNavigation();

     useEffect(()=>{
          if(item){
               setOptions({
                    title: item.first_name + " " + item.last_name,
                    headerRight: ()=>{
                         return (
                              <View style={{ flexDirection: "row", paddingRight: 20 }}>
                                   <TouchableOpacity>
                                        <Icon 
                                             size={21} 
                                             color={colors.grey}
                                             name={item.is_favorite?"star":"star-bor"} 
                                             type="material"
                                        />
                                   </TouchableOpacity>
                                   <TouchableOpacity 
                                        onPress={() => {
                                             Alert.alert(
                                               'Delete!',
                                               'Are you sure you want to remove ' + item.first_name,
                                               [
                                                 {
                                                   text: 'Cancel',
                                                   onPress: () => {},
                                                 },
                           
                                                 {
                                                   text: 'OK',
                                                   onPress: () => {
                                                     deleteContact(item.id)(contactsDispatch)(() => {
                                                       navigate(CONTACT_LIST);
                                                     });
                                                   },
                                                 },
                                               ],
                                             );
                                           }}
                                        style={{ paddingLeft: 20 }}>
                                        
                                        {loading ? (
                                             <ActivityIndicator size="small" color={colors.primary} />
                                             ) : (
                                             <Icon
                                                  color={colors.grey}
                                                  size={21}
                                                  name="delete"
                                                  type="material"
                                             />
                                        )}
                                   </TouchableOpacity>
                              </View>
                              
                         )
                    },

                    headerLeft: ()=>{
                         return (
                              <View>
                                   <Text>Sup</Text>
                              </View>
                         )
                    }
               });
          }
     }, [item, loading]);

     return(
          <ContactDetailsComponent contact={item}/>
     );
}

export default ContactDetail;