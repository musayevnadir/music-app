/** @format */
import React from "react";
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  StyleSheet,
  Image,
} from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";

// ! Interface

interface IInfoCard {
  imageUrl?: string;
  name?: string;
  email?: string;
  memberSince?: string;
  musicLoverSince?: string;
  style?: StyleProp<ViewStyle>;
}

// ! Component

export const InfoCard: React.FC<IInfoCard> = ({
  email,
  imageUrl,
  memberSince,
  musicLoverSince,
  name,
  style,
}) => {
  return (
    <View style={style}>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <View style={[commonStyles.flex, styles.infos]}>
        <Text numberOfLines={1} style={styles.name}>
          {name}
        </Text>
        <Text numberOfLines={1} style={styles.title}>
          {email}
        </Text>
        <Text numberOfLines={1} style={styles.title}>
          {memberSince}
        </Text>
        <Text numberOfLines={2} style={styles.title}>
          {musicLoverSince}
        </Text>
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  infos: {
    gap: 5,
  },

  image: {
    borderRadius: 10,
    height: 91,
    width: 100,
  },
  name: {
    fontFamily: "Nunito-Regular",
    fontSize: 18,
    color: colors.white,
  },

  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 16,
    color: colors.gray,
  },
});
