import { StyleSheet } from "react-native";
import styles from "../../theme/styles";

export default StyleSheet.create({
    ...styles,
    container:{
        flex:1
    },
    content1:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        // backgroundColor:'red'
    },
    image:{
        width:100,
        height:100,
        borderRadius:50
    },
    content2:{
        flex:0.8,
        alignItems:'center'
        // backgroundColor:'blue'
    }
})