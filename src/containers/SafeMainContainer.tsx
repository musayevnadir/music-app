/** @format */
import React from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// ! Interface

interface ISafeMainContainer {
  children: JSX.Element | JSX.Element[];
}

// ! Component

export const SafeMainContainer: React.FC<ISafeMainContainer> = ({
  children,
}) => {
  const { top, bottom } = useSafeAreaInsets();

  return <View style={[styles.root, { top, bottom }]}>{children}</View>;
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
