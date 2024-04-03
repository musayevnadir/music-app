/** @format */
import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { colors } from "theme/colors";

// ! Interface

interface IInput {
  placeholder?: string;
  icon?: any;
}

// ! Component

export const Input: React.FC<IInput> = ({ icon, placeholder }) => {
  const [isFocused, setFocused] = useState<boolean>(false);

  const onChangeText = (text: string) => {
    if (text) {
      setFocused(true);
      return;
    }
    setFocused(false);
  };

  return (
    <View style={[styles.container, isFocused ? styles.isFocused : null]}>
      {!isFocused ? (icon ? React.createElement(icon) : null) : null}
      <TextInput
        onChangeText={(text) => onChangeText(text)}
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

  isFocused: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  input: {
    flex: 1,
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Nunito-Regular",
  },
});
