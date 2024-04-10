/** @format */
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  DimensionValue,
} from "react-native";
import { colors } from "theme/colors";
import { convertTime } from "utils/time";

// ! Interface

interface IProgressBar {
  time: number;
  currentTime: number;
  style?: StyleProp<ViewStyle>;
}

// ! Component

export const ProgressBar: React.FC<IProgressBar> = ({
  time,
  currentTime,
  style,
}) => {
  const progress = ((currentTime / time) * 100).toFixed(2) + "%";

  const saveCurrentTime = currentTime > time ? time : currentTime;

  return (
    <View style={[style]}>
      <View style={styles.bar}>
        <View
          style={[styles.progress, { width: progress as DimensionValue }]}
        ></View>
      </View>
      <View style={styles.texts}>
        <Text style={styles.time}>{convertTime(saveCurrentTime)}</Text>
        <Text style={styles.time}>{convertTime(time)}</Text>
      </View>
    </View>
  );
};

// ! Styles

const styles = StyleSheet.create({
  //   root: {
  //     gap: 34,
  //   },

  bar: {
    height: 4,
    backgroundColor: colors.white,
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
  },

  progress: {
    backgroundColor: colors.primary,
    height: "100%",
    position: "absolute",
    zIndex: 5,
  },

  texts: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  time: {
    fontSize: 14,
    fontFamily: "Nunito-SemiBold",
    color: colors.white,
  },
});
