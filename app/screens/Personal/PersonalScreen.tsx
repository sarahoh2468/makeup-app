import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Button, Alert } from "react-native";

class PersonalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the PersonalScreen.</Text>
        <Button onPress={() => Alert.alert("Login Button")} title="Login" />
        <Button
          onPress={() => Alert.alert("Register Button")}
          title="Register"
        />
        <Button onPress={() => Alert.alert("Pouch Button")} title="Pouch" />
      </View>
    );
  }
}

export default PersonalScreen;
