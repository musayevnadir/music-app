/** @format */
import React from "react";
import { stackOptions } from "configs/navigation-configs";
import { createStackNavigator } from "@react-navigation/stack";
import { TabRouter } from "./Tab.Router";
import { NotificationScreen } from "screens/Notification.Screen";
import { Routes } from "./ROUTES";

const MainStack = createStackNavigator();

export const MainRouter: React.FC = () => {
  return (
    <MainStack.Navigator
      initialRouteName={Routes.tab}
      screenOptions={stackOptions}
    >
      <MainStack.Screen name={Routes.tab} component={TabRouter} />
      <MainStack.Screen
        name={Routes.notification}
        component={NotificationScreen}
      />
    </MainStack.Navigator>
  );
};
