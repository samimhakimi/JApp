import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useTheme} from "@react-navigation/native";

const SendVoice = ({ duration, status }) => {
  const {colors} = useTheme(); 
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image
            style={styles.playIcon}
            source={require("../../images/ply.png")}
          />
        </TouchableOpacity>
        <Image style={styles.wave} source={require("../../images/wave.png")} />
      </View>
      <View style={styles.footer}>
        <Text style={{...styles.status,color:colors.conversationHourText}}>{status}</Text>
        <Text style={{...styles.duration,color:colors.conversationHourText}}>{duration}</Text>
      </View>
    </View>
  );
};

export default SendVoice;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EB5E6E",
    borderRadius: 30,
    width: wp("52%"),
    flexDirection: "row",
    marginVertical: hp("1%"),
    paddingHorizontal: wp("3%"),
    marginHorizontal: wp("11.5%"),
    paddingVertical: hp("1%"),
    alignSelf: "flex-end",
    alignItems: "center",
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

  footer: {
    flexDirection: "row",
    alignSelf: "flex-end",
    width: wp("52%"),
    marginHorizontal: wp("11.5%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  playIcon: {
    height: hp("2%"),
    width: hp("1.9%"),
  },
  wave: {
    marginHorizontal: 22,
    height: hp("3.3%"),
    width: wp("34%"),
  },
});
