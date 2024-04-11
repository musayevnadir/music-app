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
import { commonStyles } from "theme/commonStyles";

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
  style,
}) => {
  return (
    <View style={[commonStyles.flexRowJustifyBetween, style]}>
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
        {right ? React.createElement(right, { color: colors.gray }) : null}
      </Pressable>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  title: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    lineHeight: 24,
    color: colors.white,
  },
});
