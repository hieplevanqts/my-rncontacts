import React, { useState } from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';


const Input = ({
                    onChangeText, 
                    icon, 
                    iconPosition, 
                    style, 
                    value, 
                    label, 
                    error,
                    ...props
          }) => {
     const [focused, setFocused] = useState(false)
     const getFlexDirection = () => {
          if(icon && iconPosition){
               if(iconPosition === "left"){
                    return "row";
               }else if(iconPosition==='right'){
                    return 'row-reverse';
               }
          }
     }

     const getBorderColor = () => {
          if(focused){
               return colors.primary;
          }
          if(error){
               return colors.danger;
          }else{
               return colors.grey;
          }
     }
     return (
          <View style={styles.inputContainer}>
               {label && <Text>{label}</Text>}
               <View style={[styles.wrapper, 
                    {alignItems: icon ? "center": "baseline"},
                    {borderColor: getBorderColor(), flexDirection: getFlexDirection()}]}>
                    <View>{icon && icon}</View>
                    <TextInput
                         style={[styles.textInput, style]}
                         onChangeText={onChangeText}
                         value={value}
                         onFocus={()=>{
                              setFocused(true);
                         }}
                         onBlur={()=>{
                              setFocused(false);
                         }}
                         {...props}
                    />
               </View>
               {error && <Text style={styles.error}>{error}</Text>}
          </View>
     );
}


export default Input;
