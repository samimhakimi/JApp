import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ReceivedText = ({ content, duration, reaction }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.main}>
      <View style={{...styles.container,backgroundColor:colors.converastionBackground}}>
        <Text style={{...styles.content,color:colors.text}}>{content}</Text>
        <Text style={styles.reaction}>{reaction}</Text>
      </View>
      {duration === null ? null : (
        <View style={styles.footer}>
          <Avatar.Image
            style={{ ...styles.avatar, backgroundColor: colors }}
            size={hp("5%")}
            source={require("../../images/av.png")}
          />
          <Text style={{...styles.duration,color:colors.conversationHourText}}>{duration}</Text>
        </View>
      )}
    </View>
  );
};

export default ReceivedText;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: wp("7%"),
  },
  container: {
    borderRadius: 10,
    width: wp("52%"),
    marginVertical: hp("0.8%"),
    paddingHorizontal: wp("3%"),
    marginHorizontal: wp("11.5%"),
    paddingVertical: hp("2%"),
    justifyContent: "center",
  },
  content: {
    fontSize: hp("1.8"),
    fontFamily: "Poppins_400Regular",
    lineHeight: hp("2.3%"),
  },

  reaction: {
    position: "absolute",
    bottom: -hp("0.9%"),
    right: -wp("2%"),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -12,
  },
  duration: {
    fontSize: hp("1.2%"),
    paddingHorizontal: wp("3.5%"),
    fontFamily: "Poppins_400Regular",
    lineHeight: hp("2%"),
    color: "#63697b",
  },
});
