import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Container from './../../components/Common/container/index';
import Input from './../../components/Common/Input/index';
import CustomButton from './../../components/Common/CustomButton/index';
import styles from './styles';
import { REGISTER } from '../../constants/routeNames';
import Message from './../Common/Message/index';
import { useState } from 'react';


const LoginComponent = ({
     error, 
     onChange, 
     onSubmit,
     loading,
     form,
     justSignedUp
}) => {
     const {navigate} = useNavigation();
     const [isSecureEntry, setIsSecureEntry] = useState(true);
     return (
          <Container>
               <Image 
                    height={70}
                    width={70}
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
               />
         <View>
              <Text style={styles.title}>Welcome to RNContacts </Text>
              <Text style={styles.subTitle}>Please login here </Text>

              {error && !error.error && <Message 
                    retry 
                    retryFn={()=>{}} 
                    onDismiss={()=>{}}
                    danger 
                    message="invalid credentials" 
               />}

              <View style={styles.form}>

               {justSignedUp && ( <Message
                              retry
                              retryFn={()=>{
                              }}
                              success
                              message="Account created successfully"
                              onDismiss={()=>{}}
                        />)}
              {error?.error && (
                        <Message
                              retry
                              retryFn={()=>{
                              }}
                              message={error?.error}
                              onDismiss={()=>{}}
                        />
                   )}

                    <Input
                              label="Username"
                              iconPosition="right"
                              placeholder="Enter Username"
                              value={form.userName || null}
                              onChangeText={(value)=>{
                                   onChange({name: "userName", value})
                              }}
                         />

                         <Input
                              label="Password"
                              placeholder="Enter password"
                              secureTextEntry={isSecureEntry}
                              icon={
                                   <TouchableOpacity onPress={()=>{
                                        setIsSecureEntry((prev)=>!prev)
                                   }}>
                                        <Text>{isSecureEntry? 'Show' : 'Hide'}</Text>
                                   </TouchableOpacity>
                              }
                              iconPosition="right"
                              onChangeText={(value)=>{
                                   onChange({name: "password", value})
                              }}
                              
                         />
                         <CustomButton 
                              onPress={onSubmit} 
                              primary 
                              title="Submit"
                              loading={loading}
                              disabled={loading}
                         />
                         <View style={styles.createSection}>
                              <Text style={styles.infoText}>Need a new account ? </Text>
                              <TouchableOpacity 
                                   onPress={()=>{
                                        navigate(REGISTER)
                                   }}
                              >
                                   <Text style={styles.linkBtn}>Register</Text>
                              </TouchableOpacity>
                         </View>
                    </View>
         </View>
          
     </Container>
     );
}


export default LoginComponent;
