import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn_or_Register from '../auth/SignIn_or_Register';
import SignInScreen from '../auth/SignIn';
import SignUpScreen from '../auth/CreateAnAccount';
import ForgotPassword from '../auth/ForgotPassword';

export type AuthStackParamList = {
  SignInOrRegister: undefined;
  SignIn: undefined;
  CreateAccount: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SignInOrRegister" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SignInOrRegister" component={SignIn_or_Register} />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            presentation: 'modal', // Modal presentation
            gestureEnabled: true, // Enable drag-to-dismiss
            animation: 'slide_from_bottom', // Optional animation
          }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={SignUpScreen}
          options={{
            presentation: 'modal', // Modal presentation
            gestureEnabled: true, // Enable drag-to-dismiss
            animation: 'slide_from_bottom', // Optional animation
          }}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
