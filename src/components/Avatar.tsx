/** @format */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";

// ! Interface

interface IAvatar {
  title: string;
  caption: string;
  url?: string;
}

// ! Component

export const Avatar: React.FC<IAvatar> = ({ title, caption, url }) => {
  return (
    <View style={[commonStyles.alignCenterRow, styles.root]}>
      {url ? <Image style={styles.image} source={{ uri: url }} /> : null}
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    gap: 13,
  },

  image: {
    width: 40,
    height: 40,
    borderRadius: 999,
  },

  title: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    lineHeight: 20,
    color: colors.white,
  },

  caption: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    lineHeight: 20,
    color: colors.lightGray,
  },
});
