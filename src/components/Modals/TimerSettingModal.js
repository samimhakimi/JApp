import React from "react";
import { TouchableOpacity, Modal, StyleSheet, Text, View, Image } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BlurView } from 'expo-blur';


const TimerSettingModal = ({ onPress, onClose }) => {
  const { colors } = useTheme();
  return (
    <BlurView tint="light" intensity={100} style={[styles.centeredView]}>
      <View style={{ ...styles.modalView, backgroundColor: colors.background }}>
        <TouchableOpacity style={styles.clsContainer} onPress={onClose}>
          <Image
            source={require("../../images/mclose.png")}
            style={styles.close}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Image source={require("../../images/add.png")} style={styles.img} />
          <Text style={{ ...styles.modalText, color: colors.text }}>
            Create
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Image source={require("../../images/msg.png")} style={styles.img} />
          <Text style={{ ...styles.modalText, color: colors.text }}>
            Send a Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Image source={require("../../images/prfl.png")} style={styles.img} />
          <Text style={{ ...styles.modalText, color: colors.text }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={onPress}>
          <Image source={require("../../images/gr.png")} style={styles.img} />
          <Text style={{ ...styles.modalText, color: colors.text }}>
            Settings
          </Text>
        </TouchableOpacity>
      </View>
    </BlurView>
  );
};

export default TimerSettingModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 20,
    padding: hp("5%"),
    width: wp("80%"),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3%"),
  },
  row: {
    flexDirection: "row",
    marginTop: hp("3%"),
    paddingHorizontal: hp("1.2%"),
  },
  img: {
    width: hp("4.2%"),
    height: hp("4.1%"),
    marginRight: hp("3%"),
  },
  close: {
    width: hp("2%"),
    height: hp("2%"),
  },
  clsContainer: {
    marginTop: -hp("2%"),
    marginLeft: -hp("2%"),
  },
});
