import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import Entypo from "@expo/vector-icons/Entypo";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";

const PicEdit = (props) => {
  return (
    <ImageBackground
      source={require("../../images/lv.png")}
      style={styles.page}
    >
      <StatusBar backgroundColor="transparent" />
      <View style={styles.con4}>
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={styles.back1}
        >
          <Icon name="arrow-left" size={hp("3%")} color="#FFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("PhotoEdit", {
              imageUrl: require("../../images/lv.png"),
            })
          }
          style={styles.btn1}
        >
          <Entypo
            name="sound-mix"
            size={hp("3%")}
            color="#000"
            style={{ transform: [{ rotate: "90deg" }] }}
          />
          <Text style={styles.txtBtn}>Edit</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn2}>
        <Text style={styles.txtBtn}>Continue</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default PicEdit;

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
  },
  con4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("6%"),
    marginTop: hp("5%"),
  },
  btn1: {
    flexDirection: "row",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    width: wp("28%"),
    paddingHorizontal: wp("4%"),
    height: hp("6%"),
    borderRadius: 10,
  },
  btn2: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    width: wp("35%"),

    height: hp("6%"),
    borderRadius: 10,
    position: "absolute",
    bottom: hp("2.6%"),
    right: wp("6%"),
  },
  txtBtn: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2.5%"),
    color: "#2fb28f",
  },
});
