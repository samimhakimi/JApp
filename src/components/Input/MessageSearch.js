import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {useTheme} from "@react-navigation/native"

const MessageSearch = () => {
  const {colors} = useTheme();
  return (
    <View style={{...styles.searchSection,backgroundColor:colors.messageSearch}}>
      <TextInput
        style={styles.input}
        placeholderTextColor="#000"
        placeholder="Search . . ."
        onChangeText={(searchString) => {
          this.setState({ searchString });
        }}
        underlineColorAndroid="transparent"
      />
      <Icon
        style={styles.searchIcon}
        name="ios-search"
        size={20}
        color="#000"
      />
    </View>
  );
};

export default MessageSearch;

const styles = StyleSheet.create({
  searchSection: {
    borderRadius: 44,
    width: wp("70%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,

  },
  searchIcon: {
    paddingHorizontal: wp("4%"),
  },
  input: {
    borderRadius: 44,
    flex: 1,
    paddingTop: hp("1.2%"),
    paddingRight: wp("15%"),
    paddingBottom: hp("1.2%"),
    paddingLeft: wp("6%"),
    color: "#000",
    fontSize: hp("2%"),
  },
});
