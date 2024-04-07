/** @format */
import { Header } from "components/Header";
import React from "react";
import { View, StyleSheet } from "react-native";
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

  text: {
    color: colors.primary,
    fontSize: 50,
  },
});
