import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import SplashLogo from '../auth/Splash_Logo';
import SplashScreen from '../auth/Splash_Screen';

export type RootStackParamList = {
    SplashScreenLogo: undefined;
    SecondSplashScreen: undefined;
    Auth: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreenLogo" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreenLogo" component={SplashLogo} />
                <Stack.Screen name="SecondSplashScreen" component={SplashScreen} />
                <Stack.Screen name="Auth" component={AuthNavigator} />
                <Stack.Screen name="Home" component={HomeNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootNavigator;
