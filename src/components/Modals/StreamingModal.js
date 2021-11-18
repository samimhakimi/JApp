import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ConfirmButton from "../Buttons/ConfirmButton";
import { BlurView } from "expo-blur";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useTheme} from "@react-navigation/native"

const StreamingModal = ({ onClose }) => {
  const {colors} = useTheme();
  return (
    <BlurView tint={colors.modalBackground} intensity={100} style={[styles.centeredView]}>
      <StatusBar backgroundColor="black" />
      <View style={{...styles.con1,backgroundColor:colors.background}}>
        <Text style={{...styles.txt,color:colors.text}}>End Live Now ?</Text>
        <ConfirmButton onPress={onClose} />
      </View>
    </BlurView>
  );
};
export default StreamingModal;

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
    paddingHorizontal: wp("18%"),
    borderRadius: 30,
  },
  txt: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3%"),
    marginVertical: hp("4%"),
  },
});
