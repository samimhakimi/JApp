import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const MenuButton = ({ onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor: colors.lazyDark}}
    >
      <Image style={styles.img} source={require("../../images/menu.png")} />
    </TouchableOpacity>
  );
};

export default MenuButton;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: hp("1%"),
    right: wp("5%"),
    paddingHorizontal: hp("1.5%"),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 18,
    paddingVertical: hp("1.9%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,
    elevation: 2,
  },
  img: {
    width: hp("5.2%"),
    height: hp("1.8%"),
  },
});
