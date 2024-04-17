/** @format */
import React from "react";
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
import { Routes } from "./ROUTES";

const Tab = createBottomTabNavigator();

export const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={tabOptions}>
      <Tab.Screen
        name={Routes.home}
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
        name={Routes.music}
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
        name={Routes.favorite}
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
        name={Routes.location}
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

// ! Colors Tab Bottom

const colors = {
  Icon: {
    activityIcon: "#6156E2",
    inactiveIcon: "#8e8e93",
  },
};
