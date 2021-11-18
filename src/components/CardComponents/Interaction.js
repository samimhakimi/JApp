import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Heart from "../Animations/Heart";

const Interaction = ({large}) => {
  // zconst [liked, setLiked] = useState(false);
  //hp("16.5%")
  return (
    <View style={{...styles.container, marginTop: large ? hp("30%"):0}}>
      <Heart/>
      <Text style={styles.amount}>247</Text>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require("../../images/comment.png")}
        />
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
 

export default Interaction;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: hp("2.3%"),
    height: hp("2%"),
  },
  amount: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.5%"),
    color: "#FFF",
    paddingLeft: hp("1%"),
    paddingRight: hp("4%"),
  },
});
