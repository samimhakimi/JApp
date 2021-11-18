import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const GreenButton = ({ title }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GreenButton;

const styles = StyleSheet.create({
  container: {
    width: wp("16%"),
    height: hp("2.8%"),
    backgroundColor: "#2fb28f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  title: {
    color: "#EEE",
    fontSize: hp("1.2%"),
    fontFamily: "Poppins_700Bold",
    letterSpacing: 2.5,
  },
});
