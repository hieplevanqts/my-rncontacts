import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import colors from '../../../assets/themes/colors';
import styles from './styles';


const CustomButton = ({
                    title,
                    secondary,
                    primary,
                    danger,
                    disabled,
                    loading,
                    onPress,
          }) => {
     

     const getBgColor = () => {
          if(disabled){
               return colors.grey;
          }
          if(primary){
               return colors.primary;
          }
          if(danger){
               return colors.danger;
          }
          
          if(secondary){
               return colors.secondary;
          }
     }
     return (
          <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
               <View style={[styles.loaderSection]}>
                    {loading && <ActivityIndicator color={primary ? colors.secondary : colors.primary}/>}
                    {title && <Text style={{ color:disabled ? "black" : colors.white, paddingLeft: loading ? 5 : 0 }}>{loading ? 'Please wait...' : title}</Text>}
               </View>
               
          </TouchableOpacity>
     );
}


export default CustomButton;
