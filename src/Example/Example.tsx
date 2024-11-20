import { View, Text } from "react-native";
import React from "react";

const Example = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
            <View style={{ flex: 1, backgroundColor: 'green' }}>

            </View>
            <View style={{ flex: 0.7, backgroundColor: 'blue' }}>

            </View>
            <View style={{ flex: 1, backgroundColor: 'yellow' }}>

            </View>
        </View>
    )
}

export default Example;