/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "theme/colors";

export const NotificationScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>NotificationScreen</Text>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.dark,
  },

  text: {
    color: colors.primary,
    fontSize: 50,
  },
});
