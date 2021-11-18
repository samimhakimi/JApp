import React from "react";
import { StyleSheet,TouchableOpacity, Image, Text, View } from "react-native";
import ConfirmButton from "../Buttons/ConfirmButton";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuButton from "../Buttons/MenuButton";
import { useTheme } from "@react-navigation/native";


const TimerModal = ({ onPress, onModalClose}) => {
  const { colors } = useTheme();
  return (
    <BlurView tint={colors.modalBackground} intensity={100} style={[styles.centeredView]}>
      <StatusBar backgroundColor="transparent" />
      <View style={{...styles.con1,backgroundColor:colors.background}}>
        <TouchableOpacity onPress={onModalClose}>
          <Image
            source={require("../../images/mclose.png")}
            style={styles.close}
          />
        </TouchableOpacity>
        <Image
          source={require("../../images/cld2.png")}
          style={styles.tmrImg}
        />
        <Text style={{...styles.txt,color:colors.text}}>Set Timer</Text>
        <View style={styles.con3}>
          <View style={styles.con2}>
            <Image
              source={require("../../images/cld3.png")}
              style={styles.img1}
            />
            <Text style={{...styles.txt2,color:colors.text}}>00:00</Text>
          </View>
          <View style={styles.con2}>
            <Image
              source={require("../../images/cld1.png")}
              style={styles.img2}
            />
            <Text style={{...styles.txt3,color:colors.text}}>01/01/2020</Text>
          </View>
        </View>
        <ConfirmButton onPress={onPress} />
      </View>
      <MenuButton />
    </BlurView>
  );
};

export default TimerModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  con1: {
    borderWidth: 2,
    borderColor: "#2fb28f",
    paddingVertical: hp("3.6%"),
    paddingHorizontal: wp("5%"),
    borderRadius: 30,
  },
  txt: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3%"),
    alignSelf: "center",
  },
  txt2: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
    alignSelf: "center",
  },
  txt3: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
    alignSelf: "center",
  },
  tmrImg: {
    alignSelf: "center",
    width: wp("12.5%"),
    height: hp("5%"),
  },
  con3: {
    flexDirection: "row",
    marginVertical: hp("1.2%"),
  },
  img1: {
    alignSelf: "center",
    width: wp("6.5%"),
    height: hp("3.6%"),
  },
  img2: {
    alignSelf: "center",
    width: wp("8%"),
    height: hp("3.6%"),
  },
  con2: {
    marginHorizontal: wp("10%"),
  },
  close:{
    width:wp("5%"),
    height:wp("5%"),
  }
});
