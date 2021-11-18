import React from "react";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const CommentInput = ({ onChangeText }) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <Avatar.Image
        style={{ backgroundColor: colors.background }}
        size={wp("12%")}
        source={require("../../images/av2.png")}
      />
      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Add a Comment . . ."
          placeholderTextColor={"#63697b"}
          onChangeText={onChangeText}
          underlineColorAndroid="transparent"
        />
        <Image source={require("../../images/smile.png")} style={styles.icon} />
      </View>
      <TouchableOpacity>
        <Image source={require("../../images/se.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

export default CommentInput;

const styles = StyleSheet.create({
  inputSection: {
    paddingHorizontal: wp("2%"),
    marginHorizontal: wp("3.5%"),
    width: wp("65%"),
    paddingVertical: hp("1%"),
    borderRadius: 15,
    borderColor: "#707070",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#fff",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    // backgroundColor: "#fff",
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
});