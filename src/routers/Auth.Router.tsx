/** @format */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "screens/auth/SignIn";
import { SignUp } from "screens/auth/SignUp";

const AuthStack = createStackNavigator();

export const AuthRouter: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};
