import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Brand2_Button = () => (
  <View style={styles.button}>
    <Text style={styles.text}>SIGN IN</Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    padding: 10
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});
