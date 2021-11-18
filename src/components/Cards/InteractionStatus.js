import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const InteractionStatus = ({ title, number }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.lazyDark }}>
      <Text style={{ ...styles.number, color: colors.text }}>{number}</Text>
      <Text style={{ ...styles.title, color: colors.conversationHourText }}>{title}</Text>
    </View>
  );
};

export default InteractionStatus;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: hp("10.2%"),
    width: wp("19.5%"),
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginHorizontal: wp("5%"),
    marginTop: hp("1.5%"),
  },
  number: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2.5%"),
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.5%"),
  },
});
