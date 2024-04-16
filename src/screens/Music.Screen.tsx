/** @format */
import React, { useState, useEffect } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";
import { ProgressBar } from "components/ProgressBar";
import { commonStyles } from "theme/commonStyles";
import { Routes } from "routers/ROUTES";

// ! Interface

interface IMusicDate {
  musicId?: number;
  musicTitle?: string;
  musicPictureBig?: string;
  name?: string;
}

export const MusicScreen: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const [radioData, setRadioData] = useState([]);

  const route = useRoute();

  const {
    musicId: ID,
    musicTitle: MUSIC_TiTLE,
    musicPictureBig: PICTURE_BiG,
    name: name,
  }: IMusicDate = route.params || {};

  // ! Fetch

  useEffect(() => {
    const url = `https://api.deezer.com/artist/${ID}/top?limit=50`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRadioData(data.data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);

  // radioData.map((element) => {
  //   if (MUSIC_TiTLE === element.title) {
  //     console.log(element.title);
  //     console.log(element.preview);
  //   }
  // });

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
          source={{ uri: PICTURE_BiG }}
        />
        <View style={styles.texts}>
          <Text style={styles.singer}>{name}</Text>
          <Text style={styles.title}>{MUSIC_TiTLE}</Text>
        </View>
      </View>
      <View style={styles.controller}>
        <ProgressBar time={185} currentTime={30} />
        <View style={commonStyles.alignCenterJustifyBetweenRow}>
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
