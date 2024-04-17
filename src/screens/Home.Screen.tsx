/** @format */

import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { Avatar } from "components/Avatar";
import { Header } from "components/Header";
import Ring from "../../assets/vectors/ring.svg";
import { colors } from "theme/colors";
import { MainSection } from "components/MainSection";
import { useNavigation } from "@react-navigation/native";
import { Card } from "components/Card";
import { FlashList } from "@shopify/flash-list";
import { commonStyles } from "theme/commonStyles";
import { Routes } from "routers/ROUTES";

// ! Interface

interface MusicParams {
  id?: number;
  title?: string;
  picture_big?: string;
  name?: string;
}

export const HomeScreen: React.FC = () => {
  const { navigate } = useNavigation();

  const [radioData, setRadioData] = useState([]);

  // ! Fetch

  useEffect(() => {
    const url = "https://api.deezer.com/radio/31061/tracks";

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
    return (
      <Card
        onPress={() =>
          handleMusic({
            id: item.artist.id,
            title: item.title,
            picture_big: item.artist.picture_big,
            name: item.artist.name,
          })
        }
        horizontal
        size={"small"}
        key={index}
        name={item.artist.name}
        title={item.title}
        picture_small={item.artist.picture_medium}
        title_short={item.title_short}
      />
    );
  };

  // ! Handle Music Function

  const handleMusic = ({ id, title, picture_big, name }: MusicParams) => {
    (navigate as any)(Routes.music, {
      musicId: id,
      musicName: name,
      musicTitle: title,
      musicPictureBig: picture_big,
      name,
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
