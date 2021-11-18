import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ModalButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require("../../images/grnche.png")} style={styles.img} />
      <Text style={styles.txt}>Done</Text>
    </TouchableOpacity>
  );
};

export default ModalButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    height: hp("5.5%"),
    width: wp("26%"),
    alignSelf: "flex-end",
    marginHorizontal: wp("5%"),
    borderRadius: 10,
  },
  img: {
    height: hp("2.5"),
    width: wp("6%"),
  },
  txt: {
    fontFamily: "Poppins_600SemiBold",
    color: "#2FB28F",
    fontSize: hp("2.5"),
  },
});
