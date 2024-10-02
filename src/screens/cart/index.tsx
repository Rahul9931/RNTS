import React from "react"
import { View, Text, ScrollView } from "react-native"
import Toolbar from "../../components/Toolbar"
import ItemsList from "./components/ItemsList"
import styles from "./styles"
import PriceDetails from "./components/PriceDetails"
import PaymentButton from "./components/PaymentButton"

const CartScreen = ()=> {
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.CartScreenView}>
            <Toolbar/>
            <View style={{padding:5}}>
                <Text style={styles.itemsLabel}>3 ITEM(S)</Text>
                <ItemsList/>
            </View>
            <View>
                <PriceDetails/>
            </View>
            <View>
                <PaymentButton/>
            </View>
        </View>
        </ScrollView>
    )
}

export default CartScreen