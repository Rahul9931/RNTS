import React from 'react';
import { Text,View } from 'react-native';
import { ImageSlider } from "react-native-image-slider-banner";

const CustomImageSlider = () => {
  return (
    <View>
      <Text> Hello  </Text>
      <ImageSlider 
    data={[
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    preview={false}
    autoPlay={true}
    timer={1000}
    onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
    caroselImageStyle={{ resizeMode: 'contain' }}
    caroselImageContainerStyle={{backgroundColor:'white', marginBottom:30}}
    indicatorContainerStyle={{backgroundColor:'white'}}
    activeIndicatorStyle={{width:12,height:12,backgroundColor:'white',borderWidth:3, borderColor:'#686868'}}
    inActiveIndicatorStyle={{width:8, height:8, backgroundColor:'#686868'}}
/>
    </View>
  );
}

export default CustomImageSlider;