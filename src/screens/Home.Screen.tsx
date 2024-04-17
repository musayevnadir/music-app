/** @format */

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { colors } from "theme/colors";
import { commonStyles } from "theme/commonStyles";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { MainSection } from "components/MainSection";
import { useNavigation } from "@react-navigation/native";
import { Card } from "components/Card";
import { FlashList } from "@shopify/flash-list";
import { Routes } from "routers/ROUTES";
import { fetchSongs } from "api/songs.api";

// ! Interface

interface MusicParams {
  id?: number;
  title?: string;
  picture_big?: string;
  name?: string;
  preview?: string;
}

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [radioData, setRadioData] = useState([]);

  // ! Fetch

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchSongs();
        setRadioData(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchData();
  }, []);

  // ! Render function FlashLIst

  const renderCards = ({ item, index }: { item: any; index: number }) => {
    return (
      <Card
        key={index}
        name={item.artist.name}
        picture_small={item.artist.picture_medium}
      />
    );
  };

  const renderCardsHorizontal = ({
    item,
    index,
  }: {
    item: any;
    index: number;
  }) => {
    const { title, artist, title_short, preview } = item;

    return (
      <Card
        onPress={() =>
          handleMusic({
            id: artist.id,
            title: title,
            picture_big: artist.picture_big,
            name: artist.name,
            preview: preview,
          })
        }
        horizontal
        size={"small"}
        key={index}
        name={artist.name}
        title={title}
        picture_small={artist.picture_medium}
        title_short={title_short}
      />
    );
  };

  // ! Handle Music Function

  const handleMusic = ({
    id,
    title,
    picture_big,
    name,
    preview,
  }: MusicParams) => {
    (navigate as any)(Routes.music, {
      id,
      title,
      picture_big,
      name,
      preview,
    });
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      indicatorStyle={"white"}
      contentContainerStyle={styles.scrollView}
      style={styles.root}
    >
      <View style={commonStyles.alignCenterJustifyBetweenRow}>
        <Avatar
          title={"Nadir Musayev"}
          caption={"Gold Member"}
          url={
            "https://hips.hearstapps.com/hmg-prod/images/9th-annual-ves-awards---red-carpet.jpg"
          }
        />
        <Header
          rightOnPress={() => navigate(Routes.notification as never)}
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
      <Text style={styles.mainText}>Recently Played</Text>
      <ScrollView
        style={styles.scrollSize}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        horizontal
      >
        <FlashList
          horizontal
          scrollEnabled={false}
          renderItem={renderCards}
          data={radioData}
          estimatedItemSize={200}
          ItemSeparatorComponent={() => <View style={styles.flashHorizontal} />}
          showsVerticalScrollIndicator={false}
        />
      </ScrollView>
      <Text style={styles.textRecommend}>Recommend for you</Text>
      <View style={styles.cardHorizontal}>
        <FlashList
          scrollEnabled={false}
          renderItem={renderCardsHorizontal}
          data={radioData}
          estimatedItemSize={200}
          ItemSeparatorComponent={() => <View style={styles.flashVertical} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ScrollView>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    paddingHorizontal: 16,
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
    flex: 1,
    minHeight: 300,
    gap: 17,
    paddingBottom: 20,
  },

  flashHorizontal: {
    width: 9,
  },

  flashVertical: {
    height: 20,
  },

  scrollSize: {
    flex: 1,
    minHeight: 105,
    minWidth: "100%",
  },
});
