import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Brand1_Button = () => (
  <View style={styles.button}>
    <Text style={styles.text}>Sign In</Text>
  </View>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 2
  },
  text: {
    color: "white"
  }
});
