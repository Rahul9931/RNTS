// SplashScreen
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/RootNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'SecondSplashScreen'>;

const SplashScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const userLoggedIn = false; // Replace with actual login check
    setTimeout(() => {
      if (userLoggedIn) {
        navigation.replace('Home');
      } else {
        navigation.replace('Auth');
      }
    }, 2000); // 2 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Second Splash Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, fontWeight: 'bold' },
});

export default SplashScreen;
