/** @format */
import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { colors } from "theme/colors";
import { Header } from "components/Header";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import { InfoCard } from "components/InfoCard";
import { infoCardDate } from "mock/infoCard.dates";
import { carDate } from "mock/card.dates";
import { FlashList } from "@shopify/flash-list";
import { Card } from "components/Card";
import { cardWidth } from "utils/size-screen";

// ! Component

export const FavoritesScreen: React.FC = ({}) => {
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

  const renderFavoriteCard = ({ item }: { item: any }) => {
    return (
      <Card
        style={styles.cardWidth}
        imageStyle={{ width: cardWidth }}
        size={"large"}
        picture_small={item.artist.picture_small}
      />
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.root}>
      <Header left={ArrowLeftVector} />
      <View>
        {infoCardDate.map(
          ({ email, memberSince, imageUrl, musicLoverSince, name }, index) => (
            <InfoCard
              style={styles.infoCard}
              key={index}
              name={name}
              email={email}
              imageUrl={imageUrl}
              memberSince={memberSince}
              musicLoverSince={musicLoverSince}
            />
          )
        )}
      </View>
      <Text style={styles.textAlbum}>Favourite Album</Text>
      <ScrollView style={styles.scrollSize} horizontal>
        <FlashList
          horizontal
          scrollEnabled={false}
          data={radioData}
          renderItem={({ item }) => (
            <Card picture_small={(item as any).album.cover_small} />
          )}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.flashGapHorizontal} />
          )}
        />
      </ScrollView>

      <Text style={[styles.textAlbum, styles.textMusic]}>Favourite Music</Text>
      <View style={styles.flashSize}>
        <FlashList
          scrollEnabled={false}
          contentContainerStyle={styles.flashBottom}
          numColumns={3}
          horizontal={false}
          data={radioData}
          renderItem={renderFavoriteCard}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.flashGapVertical} />
          )}
        />
      </View>
    </ScrollView>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
  },

  infoCard: {
    gap: 15,
    paddingTop: 46,
    paddingBottom: 72,
    flexDirection: "row",
  },

  textAlbum: {
    fontFamily: "Nunito-SemiBold",
    fontSize: 18,
    color: colors.white,
    paddingBottom: 24,
  },

  flashGapHorizontal: {
    width: 9,
  },

  flashGapVertical: {
    height: 20,
  },

  flashBottom: {
    paddingBottom: 40,
  },

  textMusic: {
    paddingTop: 32,
  },

  cardWidth: {
    width: "100%",
  },

  flashSize: {
    flex: 1,
    minHeight: 300,
  },

  scrollSize: {
    flex: 1,
    minHeight: 85,
    minWidth: "100%",
  },
});
