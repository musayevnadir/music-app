/** @format */
import { Header } from "components/Header";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "theme/colors";
import ArrowLeftVector from "../../assets/vectors/arrow-left.svg";
import HeartVector from "../../assets/vectors/heart.svg";
import { useNavigation } from "@react-navigation/native";

export const NotificationScreen: React.FC = () => {
  const { goBack } = useNavigation();

  return (
    <View style={styles.root}>
      <Header
        leftOnPress={goBack}
        left={ArrowLeftVector}
        right={HeartVector}
        color={colors.gray}
        colorPrimary={colors.primary}
        title={"Ophelia by Steven"}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Notification</Text>
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: colors.dark,
  },

  textContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: colors.primary,
    fontSize: 50,
  },
});
