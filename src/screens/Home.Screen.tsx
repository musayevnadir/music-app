/** @format */
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { colors } from "theme/colors";
import { MainSection } from "components/MainSection";
import { Card, MainCardList } from "components/Card";
import { recentlyPlayedDates, recommendDates } from "mock/card.dates";
import { FlashList } from "@shopify/flash-list";

export const HomeScreen: React.FC = () => {
  const renderRecentlyMusic = ({ item }: { item: any }) => {
    return <Card {...item} />;
  };

  const renderRecommendMusic = ({ item }: { item: any }) => {
    return <Card recommend={"recommend"} {...item} />;
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
          colorPrimary={colors.primary}
        />
      </View>
      <MainSection
        style={styles.mainContainer}
        text={"Listen The"}
        title={"Latest Musics"}
      />
      <MainCardList
        style={styles.mainCardListRecent}
        mainText={"Recently Played"}
      >
        <FlashList
          data={recentlyPlayedDates}
          horizontal={true}
          renderItem={renderRecentlyMusic}
          keyExtractor={(item) => item.id}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
        />
      </MainCardList>
      <MainCardList
        style={styles.mainCardListRecommend}
        mainText={"Recommend for you"}
      >
        <View style={styles.flatContainer}>
          <FlashList
            data={recommendDates}
            renderItem={renderRecommendMusic}
            keyExtractor={(item) => item.id}
            estimatedItemSize={200}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 900 }}
          />
        </View>
      </MainCardList>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
  },

  mainCardListRecent: {
    paddingTop: 44,
    fontSize: 22,
  },

  mainCardListRecommend: {
    paddingTop: 28,
    fontSize: 18,
  },

  flatContainer: {
    width: "100%",
    height: "100%",
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  mainContainer: {
    paddingTop: 20,
  },
});
