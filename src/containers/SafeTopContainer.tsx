/** @format */
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// ! Interface

interface ISafeTopContainer {
  children: JSX.Element | JSX.Element[];
}

// ! Component

export const SafeTopContainer: React.FC<ISafeTopContainer> = ({ children }) => {
  const { top } = useSafeAreaInsets();

  return <View style={[styles.root, { top }]}>{children}</View>;
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
