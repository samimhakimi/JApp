import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Grad = ({ h, w }) => {
  return (
    <LinearGradient
      colors={["#a9a9a9", "#777777", "#444444"]}
      style={{
        left: 0,
        right: 0,
        top: 0,
        height: h,
        width: w,
        borderRadius: 12,
        margin: hp("0.8%"),
      }}
    />
  );
};

export default Grad;

const styles = StyleSheet.create({});
