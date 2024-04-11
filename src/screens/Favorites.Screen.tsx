/** @format */
import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { colors } from "theme/colors";
import { Header } from "components/Header";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import { InfoCard } from "components/InfoCard";
import { infoCardDate } from "mock/infoCard.dates";
import { carDate } from "mock/card.dates";
import { FlashList } from "@shopify/flash-list";
import { Card } from "components/Card";
import { flashSize } from "configs/flashSize";
import { cardWidth } from "utils/size-screen";

// ! Component

export const FavoritesScreen: React.FC = ({}) => {
  const renderFavoriteCard = ({ item }: { item: any }) => {
    return (
      <Card
        style={styles.cardWidth}
        imageStyle={{ width: cardWidth }}
        size={"large"}
        url={item.url}
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
      <View style={flashSize.flash}>
        <FlashList
          horizontal
          data={carDate}
          renderItem={({ item }) => <Card url={item.url} />}
          estimatedItemSize={200}
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.flashGapHorizontal} />
          )}
        />
      </View>
      <Text style={[styles.textAlbum, styles.textMusic]}>Favourite Music</Text>
      <View style={flashSize.flash}>
        <FlashList
          contentContainerStyle={styles.flashBottom}
          numColumns={3}
          horizontal={false}
          data={carDate}
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
});
