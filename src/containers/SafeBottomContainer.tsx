/** @format */
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// ! Interface

interface ISafeBottomContainer {
  children: JSX.Element | JSX.Element[];
}

export const SafeBottomContainer: React.FC<ISafeBottomContainer> = ({
  children,
}) => {
  const { bottom } = useSafeAreaInsets();

  return <View style={[styles.root, { bottom }]}>{children}</View>;
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
