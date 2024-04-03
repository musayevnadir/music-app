/** @format */
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { stylesConfig } from "configs/styles-config";
import { colors } from "theme/colors";

// ! Interface

interface IMainCardList {
  children: JSX.Element | JSX.Element[];
  mainText?: string;
  size?: number;
  gapTop?: number;
}

interface ICard {
  horizontal?: string;
  row?: string;
  colum?: number;
  gap?: number;
  image?: any;
  id?: string;
  title?: string;
}

//  ! Component

export const MainCardList: React.FC<IMainCardList> = ({
  children,
  mainText,
  gapTop,
  size,
}) => {
  return (
    <View style={stylesConfig.root}>
      <Text style={[styles.mainText, { fontSize: size, paddingTop: gapTop }]}>
        {mainText}
      </Text>
      {children}
    </View>
  );
};

export const Card: React.FC<ICard> = ({ title, image }) => {
  return (
    <View style={styles.containerCard}>
      <Image resizeMode={"cover"} source={image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  mainText: {
    fontFamily: "Nunito-SemiBold",
    color: colors.white,
  },

  containerCard: {
    paddingTop: 18,
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 6,
  },

  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    color: colors.white,
    alignItems: "center",
  },
});
