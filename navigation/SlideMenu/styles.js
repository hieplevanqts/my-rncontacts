import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
     logoImage: {
          height:150,
          width:150,
          alignSelf: 'center',
          marginTop: 50
     },
     item : {
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingLeft: 20
     },
     itemText: {
          fontSize: 17,
          paddingVertical:7,
     }
});

export default styles