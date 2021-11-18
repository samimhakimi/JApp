import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const ProfileFollow = ({ btnName, onPress }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      {...{ onPress }}
      style={{ ...styles.container, backgroundColor: colors.lazyDark }}
    >
      <Text style={{ ...styles.txt, color: colors.text }}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default ProfileFollow;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    width: wp("35%"),
    alignItems: "center",
    justifyContent: "center",
    height: hp("4.5%"),
  },
  txt: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
});
