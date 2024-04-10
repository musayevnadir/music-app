/** @format */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthRouter } from "./Auth.Router";
import { MainRouter } from "./Main.Router";

const isAuth = true;

export const Router: React.FC = () => {
  return (
    <NavigationContainer>
      {isAuth ? <MainRouter /> : <AuthRouter />}
    </NavigationContainer>
  );
};
