import { StyleSheet } from "react-native";
import CartScreen from ".";

export default StyleSheet.create({
    CartScreenView:{
        //backgroundColor:'#e0e0e0'
        backgroundColor:'white'
    },
    toolbarContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'white'
    },
    toolBarTitle:{
        marginStart:20,
        color:'#ff7143',
        fontSize:16,
        fontWeight:'bold'
    },
    itemsLabel:{
        fontWeight:'bold',
        marginTop:10,
        color:'black'
    },
    itemsImage:{
        width:60,
        height:60
    },
    itemsName:{
        fontWeight:'bold',
        color:'black'
    },
    itemsPrice:{
        color:'black',
    },
    itemView:{
        padding: 10, 
        flexDirection: 'row',
        backgroundColor:'white',
    },
    name_price_View:{
        marginStart: 10, 
        flex: 1, 
        justifyContent: 'center'
    },
    delete_icon_qty_View:{
        justifyContent:'center'
    },
    greyView:{
        backgroundColor:'#e0e0e0',
        marginTop: 10
    },
    priceDetailsView:{
        padding:5,
        marginTop:5,
        backgroundColor:'white'
    },
    priceDetailsEndItems:{
        flex:1,
        alignItems:'flex-end'
    },
    marginT:{
        marginTop:0.5
    },
    buttonView:{
        padding: 10, 
        flexDirection: 'row',
        backgroundColor:'#ff7143',
        marginTop:30,
        marginStart:10,
        marginBottom:10,
        marginEnd:10
    },
    TextColor:{
        color:'white'
    }
})
