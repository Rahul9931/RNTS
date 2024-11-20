import React from "react";
import { Text, View } from "react-native";
import HeaderSignIn from "./src/components/HeaderSignIn";
import SignIn_or_Register from "./src/auth/SignIn_or_Register";
import Example from "./src/Example/Example";
import styles from "./src/theme/styles";

const App = ()=> {
  
  return(
    <View style={styles.parent_container}>
      <SignIn_or_Register/>
    </View>
  )
}

export default App;