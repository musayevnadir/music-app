/** @format */
import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { stylesConfig } from "./src/configs/styles-config";
import { colors } from "./src/theme/colors";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { Router } from "routers/router";

SplashScreen.preventAutoHideAsync();

const App: React.FC = () => {
  const [fontsLoaded, fontError] = useFonts({
    "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider style={styles.root} onLayout={onLayoutRootView}>
      <SafeAreaView edges={["top"]} style={stylesConfig.root}>
        <StatusBar style="light" />
        <Router />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default gestureHandlerRootHOC(App);

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
