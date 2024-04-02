/** @format */
import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";

// ! Interface

interface IInput {
  placeholder?: string;
  icon?: any;
}

// ! Component

export const Input: React.FC<IInput> = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon ? React.createElement(icon) : null}
      <TextInput
        placeholderTextColor={colors.gray}
        placeholder={placeholder}
        style={styles.input}
      ></TextInput>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 22,
    flexDirection: "row",
    gap: 20,
  },

  input: {
    flex: 1,
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
});
