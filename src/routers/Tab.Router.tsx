/** @format */
import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { tabOptions } from "configs/navigation-configs";
import { HomeScreen } from "screens/Home.Screen";
import { MusicScreen } from "screens/Music.Screen";
import { FavoritesScreen } from "screens/Favorites.Screen";
import { LocationScreen } from "screens/Location.Screen";
import { TabBarIcon } from "helpers/tab-elements";
import HomeVector from "../../assets/vectors/home.svg";
import MusicVector from "../../assets/vectors/music.svg";
import FavoritesVector from "../../assets/vectors/favorites.svg";
import LocationVector from "../../assets/vectors/location.svg";

const Tab = createBottomTabNavigator();

export const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon(
              <HomeVector />,
              focused ? colors.Icon.activityIcon : colors.Icon.inactiveIcon
            ),
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon(
              <MusicVector />,
              focused ? colors.Icon.activityIcon : colors.Icon.inactiveIcon
            ),
        }}
      />
      <Tab.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon(
              <FavoritesVector />,
              focused ? colors.Icon.activityIcon : colors.Icon.inactiveIcon
            ),
        }}
      />
      <Tab.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIcon(
              <LocationVector />,
              focused ? colors.Icon.activityIcon : colors.Icon.inactiveIcon
            ),
        }}
      />
    </Tab.Navigator>
  );
};

// ! Styles

export const styles = StyleSheet.create({
  tabView: {
    alignItems: "center",
    width: "100%",
  },
});

// ! Colors Tab Bottom

const colors = {
  Icon: {
    activityIcon: "#6156E2",
    inactiveIcon: "#8e8e93",
  },
};
