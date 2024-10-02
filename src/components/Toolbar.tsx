import React from "react"
import { View, Text } from "react-native"
import styles from "../screens/cart/styles"
import Icon from 'react-native-vector-icons/AntDesign';
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';

const Toolbar = ()=> {
    return(
        <View style={styles.toolbarContainer}>
            <View style={{flexDirection:'row', flex:1}}>
            <Icon name="arrowleft" size={24} color="#ff7143" />
            <Text style={styles.toolBarTitle}>Cart</Text>
            </View>
            <View style={{flex:1, alignItems:'flex-end'}}>
            <Delete name="delete-forever" size={24} color="#ff7143" />
            </View>
        </View>
    )
}

export default Toolbar