import React from "react";
import { Text, View } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "../styles";

const PaymentButton = () => {
    return (
        <View style={styles.buttonView}>
            <View style={{flex:1, alignItems:'center'}}>
                <Text style={[styles.itemsName,styles.TextColor]}>CONFIRM AND ACCEPT PAYMENT</Text>
            </View>
            <View>
                <Icon name="arrowright" size={20} color="#000000" />
            </View>
        </View>
    )
}

export default PaymentButton