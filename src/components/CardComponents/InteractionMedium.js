import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Heart from "../Animations/Heart";

const InteractionMedium = () => {
  const [liked, setLiked] = useState(false)
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setLiked(!liked)}>
        <Icon
          name="ios-heart"
          size={hp("1.8%")}
          color={liked ? "red" : "white"}
        />
      </TouchableOpacity>
      <Text style={styles.amount}>247</Text>
      <TouchableOpacity>
        <Image style={styles.icon} source={require("../../images/comment.png")} />
      </TouchableOpacity>
      <Text style={styles.amount}>57</Text>
      <TouchableOpacity>
        <Image style={styles.icon} source={require("../../images/share.png")} />
      </TouchableOpacity>
      <Text style={styles.amount}>33</Text>
      <TouchableOpacity>
        <Image style={styles.icon} source={require("../../images/path.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default InteractionMedium;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("8.5%"),
  },
  icon: {
    width: hp("1.5%"),
    height: hp("1.3%"),
  },
  amount: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1%"),
    color: "#FFF",
    paddingLeft: hp("0.5%"),
    paddingRight: hp("2%"),
  },
});