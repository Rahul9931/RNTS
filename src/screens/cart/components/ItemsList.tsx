import React from "react"
import { View, Text, FlatList, Image } from "react-native"
import { data } from "../../../data/itemsData"
import styles from "../styles"
import Delete from 'react-native-vector-icons/MaterialCommunityIcons';

const ItemsList = () => {

    const itemsView = ({ item }) => (
        <View style={[styles.itemView,styles.marginT]}>
            <View>
                <Image source={item.img} style={styles.itemsImage} />
            </View>
            <View style={styles.name_price_View}>
                <Text style={styles.itemsName}>{item.name}</Text>
                <Text style={styles.itemsPrice}>${item.price}</Text>
            </View>
            <View style={styles.delete_icon_qty_View}>
                <Delete name="delete-forever" size={24} color="#ff7143" />
                <Text style={styles.itemsPrice}>Qty:{item.quantity}</Text>
            </View>
        </View>
    );

    return (
        <View style={styles.greyView}>
            <FlatList
                data={data}
                renderItem={itemsView}
            />
        </View>
    )
}

export default ItemsList