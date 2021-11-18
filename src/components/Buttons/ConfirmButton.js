import React from "react";
import { TouchableOpacity,StyleSheet, Text, View } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ConfirmButton = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Confirm</Text>
    </TouchableOpacity>
    
  );
};

export default ConfirmButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2fb28f",
    alignSelf: "center",
    paddingHorizontal: hp("2.5%"),
    paddingVertical: hp("0.5%"),
    borderRadius: hp("1%"),
    marginVertical: hp("1%"),
  },
  text: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2.2%"),
    color: "#FFF",
  },
});
