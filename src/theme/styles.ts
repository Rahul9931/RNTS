import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
    parent_container:{
        flex:1,
        backgroundColor:colors.WHITE
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 50,
        backgroundColor: 'white', 
        elevation:4
      },
      closeButton: {
        marginRight: 16,
      },
      closeImage: {
        width: 24,
        height: 24,
      },
      title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
      },
      text_lite:{
        marginTop:10,
        fontWeight:'100',
        color:colors.BLACK_LITE
      },
      fontSize_medium:{
        fontSize:18
      },
      fontSize_small:{
        fontSize:10
      }
})