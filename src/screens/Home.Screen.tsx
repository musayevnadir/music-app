/** @format */
import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { colors } from "theme/colors";
import { MainSection } from "components/MainSection";
import { useNavigation } from "@react-navigation/native";
import { carDate } from "mock/card.dates";
import { Card } from "components/Card";
import { FlashList } from "@shopify/flash-list";

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const renderCards = ({ url, title }: any, index: number) => {
    return <Card key={index} title={title} url={url} />;
  };

  const renderCardsHorizontal = (item: any, index: number) => {
    return <Card size={"small"} key={index} {...item} horizontal />;
  };

  return (
    <ScrollView
      indicatorStyle={"white"}
      contentContainerStyle={styles.scrollView}
      style={styles.root}
    >
      <View style={styles.container}>
        <Avatar
          title={"Nadir Musayev"}
          caption={"Gold Member"}
          url={
            "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
          }
        />
        <Header
          // leftOnPress={leftOnPress}
          rightOnPress={() => navigate("NotificationScreen" as never)}
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
      <View>
        <Text style={styles.mainText}>Recently Played</Text>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}
          horizontal
        >
          {carDate.map(renderCards)}
        </ScrollView>
        <View style={styles.cardHorizontal}>
          <Text style={styles.textRecommend}>Recommend for you</Text>
          {carDate.map(renderCardsHorizontal)}
        </View>
      </View>
    </ScrollView>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
  },

  mainText: {
    fontSize: 22,
    color: colors.white,
    paddingTop: 44,
    paddingBottom: 18,
  },

  scrollView: {
    gap: 16,
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

  textRecommend: {
    paddingTop: 28,
    fontSize: 18,
    fontFamily: "Nunito-SemiBold",
    color: colors.white,
  },

  cardHorizontal: {
    gap: 17,
    paddingBottom: 20,
  },
});
