import React from "react";
import { StyleSheet, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

const HeaderContainer = ({ children }) => {
  const { colors } = useTheme();
  return (
    <LinearGradient colors={["#2fb28f","#2fb28f",colors.background]} style={styles.main}>
      {children}
    </LinearGradient>
  );
};

export default HeaderContainer;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#2fb28f",
    height: hp("15.5%"),
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp("1%"),
  },
});
