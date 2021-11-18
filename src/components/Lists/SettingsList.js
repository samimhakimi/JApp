import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const SettingsList = ({ img, title }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.imgCont}>
        <Image source={img} style={styles.img} />
      </View>
      <Text style={{ ...styles.txt, color: colors.text }}>{title}</Text>
    </View>
  );
};

export default SettingsList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("5%"),
    marginTop: hp("1%"),
  },
  imgCont: {
    backgroundColor: "#2fb28f",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: hp("2.5%"),
    height: hp("2.5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,
    elevation: 4,
  },
  txt: {
    fontFamily: "Poppins_500Medium",
    fontSize: hp("2"),
    paddingHorizontal: hp("1.2%"),
  },
  img: {
    width: hp("1.5"),
    height: hp("1.3"),
  },
});
