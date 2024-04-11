/** @format */

import { Dimensions } from "react-native";

// ! Favorite Screen

const gapSizes = 18;
const screenPaddingSize = 20 * 2;
const screenWidth = Dimensions.get("screen").width;
export const cardWidth = Math.floor(
  (screenWidth - screenPaddingSize - gapSizes) / 3
);
