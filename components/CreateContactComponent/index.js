import React from 'react'
import { View, Text, Switch, Image, TouchableOpacity } from 'react-native'
import Container from '../Common/container'
import styles from './styles'
import Input from './../Common/Input/index';
import CustomButton from './../Common/CustomButton/index';
import CountryPicker from 'react-native-country-picker-modal';
import { DEFAULT_IMAGE_URI } from './../../constants/general';
import colors from '../../assets/themes/colors';
import ImagePicker from '../Common/ImagePicker';



const CreateContactComponent = ({
     loading,
     error,
     onChangeText, 
     setForm, 
     toggleValueChange,
     form, 
     onSubmit,
     sheetRef,
     openSheet,
     localFile,
     onFileSelected,

}) => {
    
     return (
          <View style={styles.container}>
               <Container>
                    <Image 
                         width={150}
                         height={150}
                         source={{ uri: localFile?.path || localFile || DEFAULT_IMAGE_URI }} 
                         style={styles.imageView}
                    />
                    <TouchableOpacity onPress={openSheet}>
                         <Text style={styles.chooseText}>Choose image</Text>
                    </TouchableOpacity>
                    <Input onChangeText={(value)=>{
                              onChangeText({name:'firstName', value:value })
                         }} 
                         label="First name" 
                         placeholder="Enter first name" 
                         error={error?.first_name?.[0]}
                    />
                    <Input onChangeText={(value)=>{
                              onChangeText({name:'lastName', value:value })
                         }} 
                         label="Last name" 
                         placeholder="Enter last name" 
                         error={error?.last_name?.[0]}
                    />
                    <Input
                         icon={
                              <CountryPicker
                                   withFilter
                                   withFlag
                                   countryCode={form.countryCode || undefined}
                                   withCountryNameButton={false}
                                   withCallingCode
                                   withEmoji
                                   withCallingCodeButton
                                   onSelect={(v) => {
                                        const phoneCode = v.callingCode[0];
                                        const cCode = v.cca2;
                                        setForm({...form, phoneCode, countryCode: cCode})
                                   }}

                              />
                         }
                         style={{ paddingLeft: 10 }}
                         iconPosition="left"
                         error={error?.phone_number?.[0]}
                         onChangeText={(value)=>{
                              onChangeText({name:'phoneNumber', value:value })
                         }}
                         label="Phone number" 
                         placeholder="Enter phone number" 
                    />

                    <View style={{ 
                         flexDirection: 'row', 
                         alignItems: 'center',
                         justifyContent: 'space-between',
                         paddingVertical: 10, 
                    }}>
                         <Text style={{ 
                              fontSize: 17,
                          }}>Add to favorites</Text>
                         <Switch
                              trackColor={{ false: colors.grey , true: colors.primary }}
                              thumbColor={form.isFavorite ? "#f5dd4b" : "#f4f3f4"}
                              ios_backgroundColor="#3e3e3e"
                              onValueChange={toggleValueChange}
                              value={form.isFavorite}
                              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                         />
                    </View>

                    <CustomButton 
                         loading={loading}
                         disabled={loading}
                         onPress={onSubmit}
                         primary 
                         title="Submit" 
                    />
               </Container>
               <ImagePicker onFileSelected={onFileSelected} ref={sheetRef}/>
          </View>
     )
}

export default CreateContactComponent
