import React from "react";
import {
  StyleSheet,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Avatar } from "react-native-paper";

const LiveCommentInput = ({ onPress }) => {
  const [value, onChangeText] = React.useState("");
  return (
    <View style={styles.searchSection}>
      <Avatar.Image
        style={styles.avatar}
        size={wp("13.2%")}
        source={require("../../images/4.png")}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor="#FFF"
        placeholder="Comment..."
        onChangeText={(text) => onChangeText(text)}
        value={value}
        underlineColorAndroid="transparent"
      />
      <Image source={require("../../images/asset1.png")} style={styles.ico} />
      <Image source={require("../../images/asset2.png")} style={styles.ico} />
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require("../../images/asset3.png")}
          style={styles.send}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LiveCommentInput;

const styles = StyleSheet.create({
  searchSection: {
    alignSelf: "center",
    borderRadius: 30,
    width: wp("82%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp('2.2%'),
    backgroundColor: "rgba(136,136,136,0.5)",
    paddingHorizontal: 2,
    paddingVertical: 3,
  },
  searchIcon: {
    paddingRight: wp("7%"),
    color: "#b8b8b8",
  },
  input: {
    borderRadius: 44,
    flex: 1,
    width:wp('70%'),
    paddingTop: hp("1.2%"),
    paddingBottom: hp("1.2%"),
    paddingLeft: wp("4%"),
    color: "#FFF",
    fontSize: hp("1.6%"),
    fontFamily: "Poppins_400Regular",
  },
  avatar: {
    backgroundColor: "transparent",
    marginHorizontal: 2,
    width: 40,
  },
  ico: {
    marginHorizontal: wp("1%"),
    height: hp("4%"),
    width: wp("9%"),
  },
  send: {
    marginHorizontal: wp("1%"),
    height: hp("4%"),
    width: wp("5.5%"),
  },
});
