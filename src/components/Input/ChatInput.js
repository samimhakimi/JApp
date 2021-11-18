import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/AntDesign";

const ChatInput = ({ onChangeText }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arwBack}>
        <Icon name="left" size={16} color={colors.background} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../images/smile.png")} style={styles.icon} />
      </TouchableOpacity>

      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Type . . ."
          placeholderTextColor={"#63697b"}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
        />
        <Image source={require("../../images/sw.png")} style={styles.swIcon} />
      </View>
      <TouchableOpacity>
        <Image source={require("../../images/se.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  inputSection: {
    paddingHorizontal: wp("2%"),
    marginHorizontal: wp("3.5%"),
    width: wp("60%"),
    paddingVertical: hp("1%"),
    borderRadius: 15,
    borderColor: "#707070",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    color:"#63697b",
    fontSize: hp("1.7%"),
    fontFamily: "Poppins_400Regular",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: wp("100%"),
    paddingHorizontal: wp("25%"),
  },
  icon: {
    width: hp("3%"),
    height: hp("3%"),
  },
  swIcon: {
    width: wp("6%"),
    height: hp("1.5%"),
  },
  arwBack: {
    backgroundColor: "#BFC4D3",
    width: hp("3%"),
    height: hp("3%"),
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: wp("2%"),
  },
});
