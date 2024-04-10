/** @format */
import { Header } from "components/Header";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { colors } from "theme/colors";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import FavoriteVector from "../../assets/vectors/heart.svg";
import { useNavigation } from "@react-navigation/native";
import { ProgressBar } from "components/ProgressBar";

export const MusicScreen: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.root}>
      <Header
        rightOnPress={() => navigate("FavoriteScreen" as never)}
        left={ArrowLeftVector}
        title={"Ophelia by Steven"}
        right={FavoriteVector}
      />
      <View style={styles.main}>
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={require("../../assets/images/Rectangle 19.png")}
        />
        <View style={styles.texts}>
          <Text style={styles.singer}>Ophelia</Text>
          <Text style={styles.title}>Steven Price</Text>
        </View>
      </View>
      <View style={styles.controller}>
        <ProgressBar time={185} currentTime={90} />
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.dark,
    gap: 32,
  },

  main: {
    gap: 18,
    alignItems: "center",
  },

  image: {
    borderRadius: 36,
    height: 319,
    width: "100%",
  },

  text: {
    color: colors.primary,
    fontSize: 30,
  },

  texts: {
    gap: 7,
  },

  singer: {
    fontFamily: "Nunito-Regular",
    color: colors.white,
    fontSize: 24,
  },

  title: {
    fontFamily: "Nunito-Regular",
    color: colors.gray,
    fontSize: 18,
  },

  controller: {},
});
