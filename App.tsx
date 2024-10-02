import React from 'react';
import { Text,View } from 'react-native';
import CustomImageSlider from './src/components/CustomImageSlider';
import axios from 'axios';
import CustomFlatList from './src/components/CustomFlatList';
import Example from './src/screens/Test/Example';
import { Provider } from 'react-redux';
import { mystore } from './src/redux/store/Store';
import CartScreen from './src/screens/cart/index';


const App = () => {
  // const data = {
  //   "userId": 1111,
  //   "id": 1111,
  //   "title": "my title",
  //   "body": "my body"
  // };
  
  // axios.post('https://jsonplaceholder.typicode.com/posts', data,{
  //   headers:{
  //     Accept: 'application/json'
  //   }
  // })
  //   .then(response => {
  //     console.log(response.data);
  //   })
  //   .catch(error => {
  //     console.error("Error sending data: ", error);
  //   });
  return (
    <Provider store={mystore}>
      <CartScreen/>
       {/* <Example/> */}
      {/* <CustomFlatList/> */}
      {/* <CustomImageSlider/> */}
    </Provider>
  );
}

export default App;
