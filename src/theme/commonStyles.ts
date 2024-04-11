/** @format */

import { StyleSheet, TextStyle, ViewStyle } from "react-native";

export const commonStyles = StyleSheet.create({
  flex: {
    flex: 1,
  } as ViewStyle | TextStyle,
  flexJustifyCenter: {
    flex: 1,
    justifyContent: "center",
  } as ViewStyle,
  flexAlignCenter: {
    flex: 1,
    alignItems: "center",
  } as ViewStyle,
  flexRow: {
    flex: 1,
    flexDirection: "row",
  } as ViewStyle,
  flexRowJustifyBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  } as ViewStyle,
  flexAlignRow: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  flexAlignJustifyCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  } as ViewStyle,
  row: {
    flexDirection: "row",
  } as ViewStyle,
  justifyCenterRow: {
    flexDirection: "row",
    justifyContent: "center",
  } as ViewStyle,
  alignCenterRow: {
    flexDirection: "row",
    alignItems: "center",
  } as ViewStyle,
  alignJustifyCenter: {
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle,
  alignJustifyCenterRow: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  flexAlignJustifyCenterRow: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  alignCenterJustifyBetweenRow: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  } as ViewStyle,
  none: {
    display: "none",
  } as ViewStyle,
  fullWidthHeight: {
    width: "100%",
    height: "100%",
  } as ViewStyle,
});
