/** @format */

import React from "react";
import { View } from "react-native";
import { styles } from "routers/Tab.Router";

export const TabBarIcon = (icon: any, color: string) => (
  <View style={styles.tabView}>{React.cloneElement(icon, { color })}</View>
);
