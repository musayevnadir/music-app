/** @format */
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Input } from "./Input";
import Search from "../../assets/vectors/search.svg";
import { colors } from "theme/colors";

// ! Interface

interface IMainSection {
  text?: string;
  title?: string;
  paddingTop?: number;
}

// ! Component

export const MainSection: React.FC<IMainSection> = ({
  text,
  title,
  paddingTop,
}) => {
  return (
    <View style={[styles.root, { paddingTop: paddingTop }]}>
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
    flexDirection: "row",
    gap: 15,
  },

  text: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 26,
    color: colors.white,
  },
});
