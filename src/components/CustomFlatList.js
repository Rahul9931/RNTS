import { FlatList, Text, View } from "react-native"

const CustomFlatList = () => {
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
    const dataWithViewAll = [...data, {id:-1}]
    const Item = ({data}) =>(
        <View style={{backgroundColor:'skyblue',marginEnd:10}}>
            <Text style={{fontSize:30}}> {data.id} </Text>
            <Text style={{fontSize:30}}> {data.name} </Text>
        </View>
    )

    const ViewAllItem = () =>(
        <View style={{backgroundColor:'white',marginEnd:10}}>
            <Text style={{fontSize:30}}> View all </Text>
            <Text style={{fontSize:30}}> Items </Text>
        </View>
    )

    const RenderItem2 = ({data}) => (
        // data.id===-1?<ViewAllItem data={data}/>:<Item data={data}/>
        data.id===-1?<ViewAllItem/>:<Item data={data}/>
    )

    return(
        <View>
            <FlatList
             showsHorizontalScrollIndicator={false}
             horizontal
             data={dataWithViewAll}
             renderItem={({item}) => <RenderItem2 data={item}/>}
            />
        </View>
    )
}

export default CustomFlatList;