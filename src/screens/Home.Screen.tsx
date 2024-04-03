/** @format */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { colors } from "theme/colors";
import { MainSection } from "components/MainSection";
import { Card, MainCardList } from "components/Card";
import { recentlyPlayedDates } from "mock/card.dates";
import { FlashList } from "@shopify/flash-list";

export const HomeScreen: React.FC = () => {
  const renderMainCard = ({ item }: { item: any }) => {
    return <Card {...item} />;
  };
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
      <MainCardList size={22} gapTop={44} mainText={"Recently Played"}>
        <FlashList
          data={recentlyPlayedDates}
          horizontal={true}
          renderItem={renderMainCard}
          keyExtractor={(item) => item.id}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        />
      </MainCardList>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
