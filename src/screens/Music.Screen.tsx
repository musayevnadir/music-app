/** @format */
import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";
import { Header } from "components/Header";
import { ProgressBar } from "components/ProgressBar";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import FavoriteVector from "../../assets/vectors/heart.svg";
import ShuffleVector from "../../assets/vectors/shuffle.svg";
import SkipBackVector from "../../assets/vectors/skip-back.svg";
import SkipForwardVector from "../../assets/vectors/skip-forward.svg";
import PauseVector from "../../assets/vectors/pause.svg";
import RepeatVector from "../../assets/vectors/repeat.svg";
import { Audio } from "expo-av";
import { Routes } from "routers/ROUTES";
import { useNavigation, useRoute } from "@react-navigation/native";
import { defaultImage } from "api/songs.api";

// ! Interface

interface IMusicDate {
  name?: string;
  picture_big?: string;
  id?: number;
  title?: string;
  preview?: string;
}

// ! Default Image fot MusicScreen

// ! Component

export const MusicScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const [sound, setSound] = useState<any>();

  const { name, title, picture_big, preview }: IMusicDate =
    useRoute().params || {};

  async function playSound() {
    if (preview) {
      const { sound } = await Audio.Sound.createAsync({ uri: preview });
      setSound(sound);
      await sound.playAsync();
    } else {
      console.error("Preview is undefined");
    }
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.root}>
      <Header
        rightOnPress={() => navigate(Routes.favorite as never)}
        leftOnPress={goBack}
        left={ArrowLeftVector}
        title={"Ophelia by Steven"}
        right={FavoriteVector}
      />
      <View style={styles.main}>
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={{
            uri: picture_big || defaultImage,
          }}
        />
        <View style={styles.texts}>
          <Text style={styles.singer}>{name}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.controller}>
        <ProgressBar time={185} currentTime={30} />
        <View style={commonStyles.alignCenterJustifyBetweenRow}>
          <ShuffleVector color={colors.white} />
          <SkipBackVector color={colors.white} />
          <TouchableOpacity onPress={playSound} style={styles.pause}>
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
    textAlign: "center",
    fontFamily: "Nunito-Regular",
    color: colors.white,
    fontSize: 24,
  },

  title: {
    textAlign: "center",
    fontFamily: "Nunito-Regular",
    color: colors.gray,
    fontSize: 18,
  },

  controller: {
    gap: 34,
  },

  pause: {
    padding: 16,
    backgroundColor: colors.primary,
    borderRadius: 99,
  },
});
