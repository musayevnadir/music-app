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

// ! Interface

interface ICard {
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
  url,
  size = "medium",
  singer,
  description,
  horizontal,
  onPress,
  style,
  imageStyle,
}) => {
  const isTextVisible = title || singer || description;

  return (
    <Pressable
      onPress={onPress}
      style={[styles.root, horizontal && styles.horizontal, style]}
    >
      <Image
        style={[styles[size], styles.image, imageStyle]}
        source={{ uri: url }}
      />
      {isTextVisible ? (
        <View style={styles.texts}>
          {title ? (
            <Text
              numberOfLines={2}
              style={[styles.title, size === "small" && styles.largeTitle]}
            >
              {title}
            </Text>
          ) : null}
          {singer ? (
            <Text style={[styles.title, styles.singer]}>{singer}</Text>
          ) : null}
          {description ? (
            <Text numberOfLines={2} style={[styles.title, styles.description]}>
              {description}
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
    alignItems: "center",
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
