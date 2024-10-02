import React from "react"
import { Text, View } from "react-native"
import styles from "../styles"

const PriceDetails = () => {
    return (
        <View style={styles.greyView}>
            <View style={styles.priceDetailsView}>
                <Text style={styles.itemsName}>PRICE DETAIL</Text>
            </View>
            <View style={{marginTop:0.5}}>
            <View style={styles.itemView}>
                <View style={styles.name_price_View}>
                    <Text style={styles.itemsPrice}>SubTotal</Text>
                </View>
                <View style={styles.priceDetailsEndItems}>
                    <Text style={styles.itemsPrice}>$60</Text>
                </View>
            </View>

            <View style={styles.itemView}>
                <View style={styles.name_price_View}>
                    <Text style={styles.itemsPrice}>Tax</Text>
                </View>
                <View style={styles.priceDetailsEndItems}>
                    <Text style={styles.itemsPrice}>$5.2</Text>
                </View>
            </View>

            <View style={styles.itemView}>
                <View style={styles.name_price_View}>
                    <Text style={styles.itemsPrice}>Discount</Text>
                </View>
                <View style={styles.priceDetailsEndItems}>
                    <Text style={styles.itemsPrice}>$0.00</Text>
                </View>
            </View>

            <View style={styles.itemView}>
                <View style={styles.name_price_View}>
                    <Text style={styles.itemsPrice}>Total</Text>
                </View>
                <View style={styles.priceDetailsEndItems}>
                    <Text style={styles.itemsPrice}>$65.2</Text>
                </View>
            </View>
            </View>

        </View>
    )
}

export default PriceDetails