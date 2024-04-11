/** @format */
import React from "react";
import { View, Text, StyleSheet, StyleProp, ViewStyle } from "react-native";
import { Input } from "./Input";
import Search from "../../assets/vectors/search.svg";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";

// ! Interface

interface IMainSection {
  text?: string;
  title?: string;
  style?: StyleProp<ViewStyle>;
}

// ! Component

export const MainSection: React.FC<IMainSection> = ({ text, title, style }) => {
  return (
    <View style={[commonStyles.alignCenterRow, styles.root, style]}>
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.text}>{title}</Text>
      </View>
      <Input icon={Search} placeholder={"Search Music"} />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 15,
  },

  text: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 26,
    color: colors.white,
  },
});
