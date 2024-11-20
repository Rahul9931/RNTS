import React from "react";
import { Image, Text, View } from "react-native";
import HeaderSignIn from "../../components/HeaderSignIn";
import styles from "./styles";
import ButtonOutline from "../../components/ButtonOutline";

const SignIn_or_Register = () => {
    const handleClose = () => {
        console.log('Close button pressed');
      };
    return(
        <View style={styles.parent_container}>
            <View>
                <HeaderSignIn title="SignIn or Register" onClose={handleClose}/>
            </View>
            
            <View style={styles.content1}>
                <Image source={require('../../assets/image/odoo_icon.webp')} style={styles.image}/>
                <Text style={[styles.fontSize_medium,styles.text_lite]}>Odoo Mobile App</Text>
            </View>
            <View style={styles.content2}>
            <Text style={[styles.fontSize_small,styles.text_lite]}>SIGN IN OR REGISTER</Text>
            <ButtonOutline title="sign in" onPress={handleClose}/>
            <ButtonOutline title="Create Account" onPress={handleClose}/>
            </View>
            
        </View>
    )
}

export default SignIn_or_Register;