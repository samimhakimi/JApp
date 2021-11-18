import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SearchSetting = (props) => {
  return (
    <View style={styles.searchSection}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#000"
        placeholder="Search..."
        onChangeText={props.onChangeText}
        value={props.text}
        underlineColorAndroid="transparent"
      />
      <Icon
        style={styles.searchIcon}
        name="ios-search"
        size={20}
        color="#b8b8b8"
      />
    </View>
  );
};

export default SearchSetting;

const styles = StyleSheet.create({
  searchSection: {
    alignSelf: "center",
    backgroundColor: "#FFF",
    borderRadius: 25,
    borderColor: "#289a7c",
    borderWidth: 1,
    width: wp("74%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp("2%"),
  },
  searchIcon: {
    paddingRight: wp("7%"),
    color: "#000",
  },
  input: {
    borderRadius: 44,
    flex: 1,
    paddingTop: hp("0.8%"),
    paddingRight: wp("15%"),
    paddingBottom: hp("0.8%"),
    paddingLeft: wp("6%"),
    color: "#b8b8b8",
    fontSize: hp("2%"),
    fontFamily: "Poppins_400Regular",
  },
});
