/** @format */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { colors } from "theme/colors";
import { MainSection } from "components/MainSection";

export const HomeScreen: React.FC = () => {
  const leftOnPress = () => {
    console.log("LEFT ON PRESS");
  };

  const rightOnPress = () => {
    console.log("RIGHT ON PRESS");
  };
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Avatar
          title={"Sarwar Jahan"}
          caption={"Gold Member"}
          url={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
        />
        <Header
          leftOnPress={leftOnPress}
          rightOnPress={rightOnPress}
          right={Ring}
          color={colors.gray}
        />
      </View>
      <MainSection
        paddingTop={20}
        text={"Listen The"}
        title={"Latest Musics"}
      />
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
