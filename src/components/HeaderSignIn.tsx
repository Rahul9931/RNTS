// Header.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from '../theme/styles';

interface HeaderProps {
  title: string;
  onClose: () => void; 
}

const HeaderSignIn: React.FC<HeaderProps> = ({ title, onClose }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Image
          source={require('../assets/image/close_24.png')} 
          style={styles.closeImage}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HeaderSignIn;
