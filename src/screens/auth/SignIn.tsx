/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SignIn: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>SignIn</Text>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
