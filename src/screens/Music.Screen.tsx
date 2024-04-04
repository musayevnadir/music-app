/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const MusicScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text>Music.Screen</Text>
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
