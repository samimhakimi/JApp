import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Button = ({ children, bg, border }) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: bg,
        borderColor: border ? "#d3d3d3" : "#000",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: wp("70%"),
    borderRadius: 20,
    height: hp("6.1%"),
    marginTop: 10,
    borderWidth: 1,
  },
});
