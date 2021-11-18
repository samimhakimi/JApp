import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useTheme} from "@react-navigation/native";

const SendText = ({ duration, content, status, reaction }) => {
  const {colors} = useTheme();
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.reaction}>{reaction}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{...styles.status,color:colors.conversationHourText}}>{status}</Text>
        <Text style={{...styles.duration,color:colors.conversationHourText}}>{duration}</Text>
      </View>
    </View>
  );
};

export default SendText;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2FB28F",
    borderRadius: 10,
    width: wp("52%"),
    marginVertical: hp("1%"),
    paddingHorizontal: wp("3%"),
    marginHorizontal: wp("11.5%"),
    paddingVertical: hp("2%"),
    justifyContent: "center",
    alignSelf: "flex-end",
  },
  duration: {
    fontSize: hp("1.2%"),
    fontFamily: "Poppins_400Regular",
    lineHeight: hp("2%"),
  },
  status: {
    paddingHorizontal: wp("1%"),
    fontSize: hp("1%"),
    fontFamily: "Poppins_400Regular",
  },
  content: {
    color: "#FFF",
    fontSize: hp("1.8"),
    fontFamily: "Poppins_400Regular",
    lineHeight: hp("2.3%"),
  },
  reaction: {
    position: "absolute",
    top: -hp("1.2%"),
    left: -wp("1.7%"),
  },
  footer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: wp("52%"),
    marginHorizontal: wp("11.5%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
});
