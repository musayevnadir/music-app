/** @format */
import React from "react";
import {
  Text,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
  View,
  Pressable,
  ImageStyle,
} from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";

// ! Interface

interface ICard {
  name?: string;
  picture_small?: string;
  cover_small?: string;
  title_short?: string;
  url?: string;
  title?: string;
  singer?: string;
  description?: string;
  horizontal?: boolean;
  onPress?: () => void;
  size?: "small" | "medium" | "large";
  style?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
}

// ! Component

export const Card: React.FC<ICard> = ({
  title,
  name,
  title_short,
  size = "medium",
  singer,
  description,
  horizontal,
  onPress,
  style,
  imageStyle,
  picture_small,
  cover_small,
}) => {
  const isTextVisible = name || title || singer || description || title_short;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },
        commonStyles.flexAlignCenter,
        styles.root,
        horizontal && styles.horizontal,
        style,
      ]}
    >
      <Image
        style={[styles[size], styles.image, imageStyle]}
        source={{ uri: picture_small || cover_small }}
      />
      {isTextVisible ? (
        <View style={styles.texts}>
          {name || title ? (
            <Text
              numberOfLines={2}
              style={[styles.title, size === "small" && styles.largeTitle]}
            >
              {name}
              {title}
            </Text>
          ) : null}
          {singer ? (
            <Text style={[styles.title, styles.singer]}>{singer}</Text>
          ) : null}
          {title_short ? (
            <Text numberOfLines={2} style={[styles.title, styles.description]}>
              {title_short}
            </Text>
          ) : null}
        </View>
      ) : null}
    </Pressable>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 6,
  },

  horizontal: {
    flexDirection: "row",
    gap: 15,
  },

  image: {
    borderRadius: 10,
  },

  texts: {
    gap: 5,
    maxWidth: 106,
  },

  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    color: colors.white,
  },

  largeTitle: {
    fontSize: 16,
  },

  singer: {
    fontSize: 13,
  },

  description: {
    fontSize: 14,
  },

  small: {
    height: 88,
    width: 88,
  },
  medium: {
    height: 81,
    width: 101,
  },
  large: {
    height: 111,
    width: 106,
  },
});
