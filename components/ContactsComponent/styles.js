import { StyleSheet } from 'react-native';
import colors from '../../assets/themes/colors';


export default StyleSheet.create({
     
     itemContainer: {
          flexDirection: 'row',
          justifyContent: "space-between",
          paddingRight: 20,
          alignItems: 'center',
     },item:{
          flexDirection: 'row',
          paddingVertical: 10,
          alignItems: 'center',
          paddingHorizontal: 20,
     },
     name: {
          fontSize: 17,
     },
     phoneNumber: {
          color: colors.grey,
          paddingVertical:5,
     },
     floatingAction: {
          backgroundColor: 'red',
          width: 55,
          height: 55,
          position: 'absolute',
          bottom: 45,
          right: 10,
          borderRadius:100,
          justifyContent: 'center',
          alignItems: 'center'
     }
})