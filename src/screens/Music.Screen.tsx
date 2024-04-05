/** @format */
import { SafeTopContainer } from "containers/SafeTopContainer";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const MusicScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>MusicScreen</Text>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },

  text: {
    color: colors.primary,
    fontSize: 30,
  },
});
