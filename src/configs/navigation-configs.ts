/** @format */
import { StyleSheet, Platform } from "react-native";

export const stackOption = {
  headerShown: false,
};

const styles = StyleSheet.create({
  tabBarStyle: {
    marginHorizontal: 20,
    paddingTop: 23,
    height: 85,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: "#0A071E",
    borderTopColor: "transparent",

    ...Platform.select({
      ios: {
        shadowColor: "white",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 5,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});

export const tabOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#4870FF",
  tabBarStyle: styles.tabBarStyle,
  tabBarShowLabel: false,
};
