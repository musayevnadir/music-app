/** @format */
import React from "react";
import { View } from "react-native";
import { Avatar } from "../components/Avatar";

export const HomeScreen: React.FC = () => {
  return (
    <View>
      <Avatar
        title={"Sarwar Jahan"}
        caption={"Gold Member"}
        url={
          "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
        }
      />
    </View>
  );
};
