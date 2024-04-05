/** @format */
import React from "react";
import { stackOption } from "configs/navigation-configs";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "screens/Home.Screen";
import { MusicScreen } from "screens/Music.Screen";
import { FavoritesScreen } from "screens/Favorites.Screen";
import { LocationScreen } from "screens/Location.Screen";
import { TabRouter } from "./Tab.Router";

const MainStack = createStackNavigator();

export const MainRouter: React.FC = () => {
  return (
    <MainStack.Navigator
      screenOptions={stackOption}
      initialRouteName="TabBarRouter"
    >
      <MainStack.Screen
        name="TabBarRouter"
        component={TabRouter}
        options={{ headerShown: false }}
      />
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      <MainStack.Screen name="MusicScreen" component={MusicScreen} />
      <MainStack.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <MainStack.Screen name="LocationScreen" component={LocationScreen} />
    </MainStack.Navigator>
  );
};
