import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Test/HomeScreen';
import CategoryScreen from '../screens/Test/CategoryScreen';
import CartScreen from '../screens/Test/CartScreen';
import ProfileScreen from '../screens/Test/ProfileScreen';

export type HomeTabParamList = {
  Home: undefined;
  Category: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<HomeTabParamList>();

const HomeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Category" component={CategoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
