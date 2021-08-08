import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import Container from './../../components/Common/container/index';
import Input from './../../components/Common/Input/index';
import CustomButton from './../../components/Common/CustomButton/index';
import styles from './styles';
import { LOGIN } from '../../constants/routeNames';
import Message from './../Common/Message/index';


const RegisterComponent = ({
               onSubmit,
               onChange,
               form,
               errors,
               error,
               loading
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
              <Text style={styles.subTitle}>Create a free account </Text>
              <View style={styles.form}>
                   {error?.error && (
                        <Message
                              retry
                              retryFn={()=>{}}
                              message={error?.error}
                        />
                   )}
                    <Input
                              label="Username"
                              iconPosition="right"
                              placeholder="Enter Username"
                              onChangeText={(value)=>{
                                   onChange({name: "userName", value})
                              }}
                              error={errors.userName||error?.username?.[0]}
                         />

                         <Input
                              label="First name"
                              iconPosition="right"
                              placeholder="Enter first name"
                              onChangeText={(value)=>{
                                   onChange({name: "firstName", value})
                              }}
                              error={errors.firstName||error?.first_name?.[0]}
                         />
                         <Input
                              label="Last name"
                              iconPosition="right"
                              placeholder="Enter last name"
                              onChangeText={(value)=>{
                                   onChange({name: "lastName", value})
                              }}
                              error={errors.lastName||error?.first_name?.[0]}
                         />
                         <Input
                              label="Email"
                              iconPosition="right"
                              placeholder="Enter email"
                              onChangeText={(value)=>{
                                   onChange({name: "email", value})
                              }}
                              error={errors.email||error?.email?.[0]}
                         />

                         <Input
                              label="Phone"
                              iconPosition="right"
                              placeholder="Enter phone number"
                              onChangeText={(value)=>{
                                   onChange({name: "phone", value})
                              }}
                              error={errors.phone||error?.phone?.[0]}
                         />

                         <Input
                              label="Password"
                              placeholder="Enter password"
                              onChangeText={(value)=>{
                                   onChange({name: "password", value})
                              }}
                              secureTextEntry={isSecureEntry}
                              icon={
                                   <TouchableOpacity onPress={()=>{
                                        setIsSecureEntry((prev)=>!prev)
                                   }}>
                                        <Text>{isSecureEntry? 'Show' : 'Hide'}</Text>
                                   </TouchableOpacity>}
                              iconPosition="right"
                              error={errors.password||error?.password?.[0]}
                         />
                         <CustomButton 
                              loading={loading}
                              onPress={onSubmit} 
                              primary 
                              title="Submit"
                              disabled={loading}
                         />
                         <View style={styles.createSection}>
                              <Text style={styles.infoText}>Already have an account ? </Text>
                              <TouchableOpacity 
                                   onPress={()=>{
                                        navigate(LOGIN)
                                   }}
                              >
                                   <Text style={styles.linkBtn}>Login</Text>
                              </TouchableOpacity>
                         </View>
                    </View>
         </View>
          
     </Container>
     );
}


export default RegisterComponent;
