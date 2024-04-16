/** @format */
import { StyleSheet, Platform } from "react-native";
import { colors } from "theme/colors";

// ! Stack Navigation Styles

export const stackOptions = {
  headerShown: false,
  cardStyle: {
    backgroundColor: colors.dark,
  },
};

// ! Tab Bottom Navigation Styles

const styles = StyleSheet.create({
  tabBarStyle: {
    marginHorizontal: 20,
    paddingTop: 23,
    height: 85,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    backgroundColor: colors.dark,
    borderTopColor: "transparent",

    ...Platform.select({
      ios: {
        shadowColor: "white",
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
      android: {
        shadowColor: "white",
        shadowOpacity: 0.1,
        shadowRadius: 5,
      },
    }),
  },
});

export const tabOptions = {
  headerShown: false,
  tabBarActiveTintColor: colors.primary,
  tabBarStyle: styles.tabBarStyle,
  tabBarShowLabel: false,
};
