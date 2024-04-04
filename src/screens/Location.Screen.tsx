/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const LocationScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>LocationScreen</Text>
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
