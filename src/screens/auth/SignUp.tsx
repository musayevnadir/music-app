/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const SignUp: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>SignUp</Text>
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
