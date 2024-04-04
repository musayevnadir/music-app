/** @format */
import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import { colors } from "theme/colors";

// ! Interface

interface IHeader {
  left?: any;
  right?: any;
  title?: string;
  color?: string;
  colorPrimary?: string;
  leftOnPress?: () => void;
  rightOnPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

// ! Component

export const Header: React.FC<IHeader> = ({
  left,
  right,
  title,
  leftOnPress,
  rightOnPress,
  color,
}) => {
  return (
    <View style={styles.root}>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={leftOnPress}
        hitSlop={15}
      >
        {left ? React.createElement(left, { color: color }) : null}
      </Pressable>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
        onPress={rightOnPress}
        hitSlop={15}
      >
        {right ? React.createElement(right, { color: color }) : null}
      </Pressable>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    lineHeight: 24,
    color: colors.white,
  },
});
