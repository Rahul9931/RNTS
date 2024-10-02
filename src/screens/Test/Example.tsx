import { useState } from "react"
import { Text, View, FlatList, Button } from "react-native"

const Example = () => {
    const data = [
        {
            id:1,
            name:'rahul'
        },
        {
            id:2,
            name:'saini'
        },
        {
            id:3,
            name:'goku'
        },
        {
            id:4,
            name:'saiyan'
        },
        {
            id:5,
            name:'super'
        },
    ]

    const Item = ({data}) =>(
        <View style={{backgroundColor:'skyblue',marginEnd:10}}>
            <Text style={{fontSize:20}}> {data.id} </Text>
            <Text style={{fontSize:20}}> {data.name} </Text>
            <Button title="Add to card"/>
        </View>
    )

    return(
        <View>
            <Text style={{fontSize:20,textAlign:'center'}}>1</Text>
        <View style={{marginTop:20}}>
            <FlatList
             showsHorizontalScrollIndicator={false}
             horizontal
             data={data}
             renderItem={({item}) => <Item data={item}/>}
            />
        </View>
        </View>
    )
}

const Cart = () => {
    const [cartData, setCartData] = useState([])

    const Item2 = ({data}) =>(
        <View style={{backgroundColor:'skyblue',marginEnd:10}}>
            <Text style={{fontSize:20}}> {data.id} </Text>
            <Text style={{fontSize:20}}> {data.name} </Text>
            <Button title="Add to card"/>
        </View>
    )

    return(
    <View>
    <FlatList
         showsHorizontalScrollIndicator={false}
         horizontal
         data={cartData}
         renderItem={({item}) => <Item2 data={item}/>}
        />
    </View>
    )
}

export default Example;