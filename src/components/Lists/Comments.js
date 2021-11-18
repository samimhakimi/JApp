import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GreenButton from "../Buttons/GreenButton";
import Icon from "@expo/vector-icons/Ionicons";

const Comments = ({ img, name, desc, liked, number, duration }) => {
  const { colors } = useTheme();
  return (
    <View style={{...styles.container,backgroundColor:colors.background}}>
      <View style={{width:wp("13%")}}>
        <Avatar.Image
          style={{ backgroundColor: colors }}
          size={wp("12%")}
          source={img}
        />
        {liked ? (
          <View style={styles.liked}>
            <Icon name="ios-heart" size={hp("2.2%")} color="#ff5757" />
            <Text style={styles.num}>{number}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.txtCont}>
        <Text style={{ ...styles.name, color: colors.text }}>{name}</Text>
        <Text style={{ ...styles.content, color: colors.text }}>{desc}</Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <GreenButton title={duration} />
      </View>
    </View>
  );
};

export default Comments;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    marginBottom: hp("2%"),
  },
  txtCont: {
    paddingLeft: wp("3%"),
    paddingRight: wp("0.2%"),
    width: wp("60%"),
  },
  name: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  content: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.45%"),
  },
  liked: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: wp("5%"),
    alignSelf: "center",
    marginTop: -hp("2%"),
  },
  num: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1%"),
    color: "#7a8fa6",
    alignSelf: "center",
    paddingLeft: wp("1%"),
  },
});
