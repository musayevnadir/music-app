/** @format */

import React from "react";
import { View, StyleSheet } from "react-native";

export const TabBarIcon = (icon: any, color: string) => (
  <View style={styles.tabView}>{React.cloneElement(icon, { color })}</View>
);

// ! Styles

const styles = StyleSheet.create({
  tabView: {
    alignItems: "center",
    width: "100%",
  },
});
