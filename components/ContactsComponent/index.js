import React from 'react';
import { View, Image, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../assets/themes/colors';
import Message from './../Common/Message/index';
import styles from "./styles";
import { useNavigation } from '@react-navigation/native';
import { CREATE_CONTACT } from './../../constants/routeNames';




const ContactsComponent = ({ sortBy, data, loading, setModalVisible }) => {
     const {navigate} = useNavigation();
     const ListEmptyComponent=()=>{
          return <View style={{ paddingVertical: 100, paddingHorizontal: 100 }}>
                         <Message info  message="No contacts to show"/>
                    </View>
     }

     const renderItem =({item}) => {
          const {
               contact_picture, 
               first_name, 
               last_name,
               phone_number,
               country_code
          } = item;

          return (<TouchableOpacity style={styles.itemContainer}>
               <View style={styles.item}>
                    {contact_picture ? (
                         <Image style={{ 
                              width: 45,
                              height: 45,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius:100,
                          }} source={{ uri:contact_picture }}/>
                    ):(
                         <View style={{ 
                              width: 45,
                              height: 45,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              alignItems: 'center',
                              borderRadius:100,
                              backgroundColor: colors.grey,
                          }}>
                               <Text style={[styles.name, {color: colors.white}]}>{first_name[0]}</Text>
                               <Text style={[styles.name, {color: colors.white}]}>{last_name[0]}</Text>
                          </View>
                        
                    )}

                    <View style={{ paddingLeft: 20 }}>
                         <View style={{ flexDirection: 'row' }}>

                              <Text style={styles.name}>{first_name}</Text>
                              <Text style={styles.name}> {last_name}</Text>
                         </View>
                         <Text style={styles.phoneNumber}>{`${country_code} ${phone_number}`}</Text>
                    </View>
                    
               </View>
               {/* <AntDesign name="right" size={14} color="black" color={colors.grey}/> */}
          </TouchableOpacity>)
     }
     return (
          <>
               <View style={{ backgroundColor: colors.white, flex:1 }}>
                    

                    {loading && (<View style={{ paddingHorizontal: 100, paddingVertical: 100 }}>
                         <ActivityIndicator color={colors.primary} size="large" />
                    </View>)}
               
                    {!loading && (
                         <View style={{ paddingVertical: 20 }}>
                              <FlatList
                                   renderItem={renderItem}
                                   data={sortBy?data.sort((a,b)=>{
                                        if(sortBy==='First Name'){
                                             if(b.first_name>a.first_name){
                                                  return -1;
                                             }else{
                                                  return 1;
                                             }
                                        }

                                        if(sortBy==='Last Name'){
                                             if(b.last_name>a.last_name){
                                                  return -1;
                                             }else{
                                                  return 1;
                                             }
                                        }

                                   }) : data} 
                                   ItemSeparatorComponent={()=>(
                                        <View style={{ height:0.5, backgroundColor: colors.grey }}></View>
                                   )}
                                   keyExtractor={(item)=>item.id}
                                   ListEmptyComponent={ListEmptyComponent}
                                   ListFooterComponent={<View style={{ height: 150 }}></View>}
                              />
                         </View>
                    )}
               
               </View>
               <TouchableOpacity 
                    style={styles.floatingAction}
                    onPress={()=>{
                         navigate(CREATE_CONTACT);
                    }}
               >
                    {/* <AntDesign name="plus" size={30} color="white" /> */}
               </TouchableOpacity>
          </>
     );
}


export default ContactsComponent;
