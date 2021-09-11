import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";

const styles = StyleSheet.create({
     textInput: {
          flex: 1,
          width:"100%",
          color: "#000"
     },
     wrapper: {
          height: 42,
          borderColor: colors.grey,
          borderWidth: 1,
          borderRadius: 4,
          flexDirection:'row',
          paddingHorizontal: 5,
          marginTop: 5,

     },
     inputContainer: {
          paddingVertical: 12,
     },
     error:{
          color: colors.danger,
          paddingTop: 4,
          fontSize: 12
     }
});

export default styles