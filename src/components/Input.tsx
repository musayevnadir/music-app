/** @format */
import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";

// ! Interface

interface IInput {
  placeholder?: string;
  icon?: any;
  value?: string;
}

// ! Component

export const Input: React.FC<IInput> = ({ icon, placeholder, value }) => {
  const [isFocused, setFocused] = useState<boolean>(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return (
    <View
      style={[
        commonStyles.flexAlignRow,
        styles.container,
        isFocused ? styles.isFocused : null,
      ]}
    >
      {!isFocused ? (icon ? React.createElement(icon) : null) : null}
      <TextInput
        style={[commonStyles.flex, styles.input]}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        placeholderTextColor={colors.gray}
        placeholder={placeholder}
      ></TextInput>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 22,
    gap: 20,
  },

  isFocused: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.primary,
  },

  input: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: "Nunito-Regular",
    paddingVertical: 11,
  },
});
