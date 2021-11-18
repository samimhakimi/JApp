import { useTheme } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/SimpleLineIcons";

import AntDesign from "@expo/vector-icons/AntDesign";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
export default function VideoComponent(props) {
  const { colors } = useTheme();
  const align = false;
  const trim = true;
  return (
    <>
      <LinearGradient
        colors={["#2fb28f", "#2fb28f", colors.background]}
        style={styles.headerBackGrad}
      />
      <View style={styles.headerCo}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={hp("3%")}
            color={colors.text}
            style={styles.arrowBack}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="check" size={hp("3.8%")} color={colors.text} />
        </TouchableOpacity>
      </View>
      {align ? (
        <Text style={{ ...styles.tit, color: colors.text }}>Align</Text>
      ) : trim ? (
        <Text style={{ ...styles.tit, color: colors.text }}>Trim</Text>
      ) : (
        <Text style={{ ...styles.tit, color: colors.text }}>Contrast</Text>
      )}

      {trim ? <Trim /> : null}
      {align ? (
        <Image
          source={require("../../../images/mask.png")}
          style={styles.mask}
        />
      ) : null}
      <View
        style={{ ...styles.rw, marginTop: align ? hp("1.2%") : hp("2.4%") }}
      >
        <Image source={require("../../../images/ed1.png")} style={styles.ed1} />
        <Image source={require("../../../images/ed2.png")} style={styles.ed2} />
        <Image source={require("../../../images/ed3.png")} style={styles.ed3} />
        <Image source={require("../../../images/ed4.png")} style={styles.ed4} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  headerBackGrad: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    zIndex: -1,
    height: hp("20%"),
  },
  botGrad: {
    position: "absolute",
    bottom: 0,
    zIndex: -9999,
    width: "100%",
    height: Platform.OS === "ios" ? hp("33.5%") : hp("35.5%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  mdlStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
  },
  arrowFront: {
    marginTop: hp("11%"),
    marginRight: wp("22%"),
  },
  handleStyle: {
    marginTop: hp("2.5%"),
    marginRight: wp("3%"),
    backgroundColor: "#888888",
  },
  modCont: {
    flex: 1,
  },
  headerCo: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    position: "absolute",
    width: "100%",
    marginTop: hp("5.5%"),
    zIndex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  chk: {
    width: wp("7%"),
    height: hp("2.5%"),
  },
  tit: {
    marginTop: hp("10%"),
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("3%"),
    alignSelf: "center",
  },
  imgBack: {
    alignSelf: "center",
    marginTop: hp("6.5%"),
    justifyContent: "center",
  },
  pl: {
    height: hp("10.5%"),
    width: wp("20%"),
    alignSelf: "center",
  },
  mask: {
    alignSelf: "center",
    zIndex: 9999,
    width: wp("66%"),
    height: hp("45%"),
    marginTop: -hp("42.5%"),
  },
  rw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: wp("80%"),
    alignSelf: "center",
  },
  ed1: {
    width: wp("5.5%"),
    height: hp("3%"),
  },
  ed2: {
    width: wp("6%"),
    height: hp("3%"),
  },
  ed3: {
    width: wp("3.2%"),
    height: hp("3.5%"),
  },
  ed4: {
    width: wp("6%"),
    height: hp("3%"),
  },
});
