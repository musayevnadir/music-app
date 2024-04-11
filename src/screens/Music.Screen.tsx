/** @format */
import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Header } from "components/Header";
import { colors } from "theme/colors";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import FavoriteVector from "../../assets/vectors/heart.svg";
import ShuffleVector from "../../assets/vectors/shuffle.svg";
import SkipBackVector from "../../assets/vectors/skip-back.svg";
import SkipForwardVector from "../../assets/vectors/skip-forward.svg";
import PauseVector from "../../assets/vectors/pause.svg";
import RepeatVector from "../../assets/vectors/repeat.svg";
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
        <ProgressBar time={185} currentTime={100} />
        <View style={styles.buttons}>
          <ShuffleVector color={colors.white} />
          <SkipBackVector color={colors.white} />
          <TouchableOpacity style={styles.pause}>
            <PauseVector color={colors.white} />
          </TouchableOpacity>
          <SkipForwardVector color={colors.white} />
          <RepeatVector color={colors.white} />
        </View>
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

  controller: {
    gap: 34,
  },

  buttons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  pause: {
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 99,
  },
});
