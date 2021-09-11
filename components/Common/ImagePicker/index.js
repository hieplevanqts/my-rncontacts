import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import RBSheet from "react-native-raw-bottom-sheet";
import styles from './styles';
import colors from '../../../assets/themes/colors';
import ImagePickerCropper from 'react-native-image-crop-picker';
import Icon from './../../Common/Icon';




const ImagePicker = React.forwardRef(({onFileSelected}, ref) => {


     const options = [
          {
               name:"Take from camera", 
               icon : <Icon color={colors.grey} size={21} name="camera" />,
               onPress: () => {
                    ImagePickerCropper.openCamera({
                      width: 300,
                      height: 300,
                      cropping: true,
                      freeStyleCropEnabled: true,
                    })
                      .then((images) => {
                        onFileSelected(images);
                      })
                      .catch((error) => {});
                  },
          },
          {
               name:"Choose from gallery", 
               icon : <Icon name="image" color={colors.grey} size={21} />,
               onPress: () => {
                    ImagePickerCropper.openPicker({
                      width: 300,
                      height: 300,
                      cropping: true,
                      freeStyleCropEnabled: true,
                    })
                      .then((images) => {
                        onFileSelected(images);
                      })
                      .catch((error) => {});
                  },
          }
     ]
     return (
          <RBSheet
          ref={ref}
          height={300}
          openDuration={250}
          closeOnDragDown
          customStyles={{
            container: {
               borderTopRightRadius:20,
               borderTopLeftRadius:20,
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
             <View style={styles.optionsWraper}>
                    {options.map(({name, onPress, icon})=>(
                         <TouchableOpacity 
                              onPress={onPress}
                              style={styles.pickerOption} 
                              key={name}>
                              {icon}
                              <Text style={styles.text}>{name}</Text>
                         </TouchableOpacity>
                    ))}
             </View>
             
        </RBSheet>
     )
})

export default ImagePicker

