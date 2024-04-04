/** @format */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import { colors } from "theme/colors";

// ! Interface

interface IMainCardList {
  children: JSX.Element | JSX.Element[];
  mainText?: string;
  style?: StyleProp<ViewStyle>;
}

interface ICard {
  image?: any;
  title?: string;
  recommend?: string;
  genre?: string;
  performer?: string;
  follow?: string;
}

//  ! Component

export const MainCardList: React.FC<IMainCardList> = ({
  children,
  mainText,
  style,
}) => {
  return (
    <View>
      <Text style={[styles.mainText, style]}>{mainText}</Text>
      {children}
    </View>
  );
};

// ! Component

export const Card: React.FC<ICard> = ({
  title,
  image,
  recommend,
  genre,
  performer,
  follow,
}) => {
  return (
    <View
      style={[
        styles.containerCard,
        recommend ? styles.containerCardRecommend : null,
      ]}
    >
      <Image resizeMode={"cover"} source={image} />
      {!recommend ? <Text style={styles.title}>{title}</Text> : null}
      {recommend ? (
        <View style={styles.containerRecommend}>
          <Text style={styles.genre}>{genre}</Text>
          <Text style={styles.performer}>{performer}</Text>
          <Text style={styles.follow}>{follow}</Text>
        </View>
      ) : null}
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  containerRecommend: {
    gap: 5,
  },
  mainText: {
    fontFamily: "Nunito-SemiBold",
    color: colors.white,
  },

  containerCard: {
    paddingTop: 18,
    paddingRight: 16,
    gap: 6,
  },

  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },

  containerCardRecommend: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  genre: {
    fontFamily: "Nunito-Regular",
    fontSize: 17,
    lineHeight: 22,
    color: colors.white,
  },

  performer: {
    fontFamily: "Nunito-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: colors.lightGray,
  },

  follow: {
    fontFamily: "Nunito-Regular",
    fontSize: 13,
    lineHeight: 18,
    color: colors.lightGray,
  },
});
