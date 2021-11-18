import React from "react";
import { StyleSheet, Text, Image, View, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const LiveStreamingDrawer = ({ onTextPress, onLocationPress, onPress }) => {
  return (
    <View style={styles.page}>
      <View style={styles.row1}>
        <TouchableOpacity style={styles.col1} onPress={onTextPress}>
          <Image source={require("../../images/wrt.png")} style={styles.img1} />
          <Text style={styles.txt}>Text</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sec}>
          <Image
            source={require("../../images/modl6.png")}
            style={styles.img2}
          />
          <Text style={styles.txt}>Music</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row2}>
        <TouchableOpacity style={styles.col2} onPress={onLocationPress}>
          <Image
            source={require("../../images/modl3.png")}
            style={styles.img3}
          />
          <Text style={styles.txt}>Location</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sec}>
          <Image
            source={require("../../images/sharesh.png")}
            style={styles.img4}
          />
          <Text style={styles.txt}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawer} onPress={onPress}>
          <Icon
            name="arrow-left"
            size={hp("3%")}
            color="#2ac4c1"
            style={styles.arrowBack}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.row3}>
        <TouchableOpacity style={styles.col3}>
          <Image
            source={require("../../images/modl2.png")}
            style={styles.img5}
          />
          <Text style={styles.txt}>Set Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sec}>
          <Image
            source={require("../../images/outlineAdd.png")}
            style={styles.img6}
          />
          <Text style={styles.txt}>Tag Friend</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LiveStreamingDrawer;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    height: hp("26%"),
    marginTop: hp("6.5%"),
  },
  row1: {
    flexDirection: "row",
    paddingVertical: hp("1.2%"),
    paddingHorizontal: hp("4%"),
  },
  col1: {
    marginRight: wp("10.5%"),
    alignItems: "center",
  },
  img1: {
    width: wp("9%"),
    height: hp("3.7%"),
  },
  txt: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.2%"),
  },
  img2: {
    height: hp("3.4"),
    width: wp("8%"),
  },
  row2: {
    flexDirection: "row",
    paddingVertical: hp("1.2%"),
    paddingHorizontal: wp("7.5%"),
  },
  col2: {
    marginRight: wp("10.5%"),
    alignItems: "center",
  },
  sec: {
    alignItems: "center",
  },
  img3: {
    height: hp("4%"),
    width: wp("6.8%"),
  },
  img4: {
    width: wp("7.5%"),
    height: hp("4%"),
  },
  drawer: {
    left: wp("3.5%"),
    top: hp("0.9"),
  },
  row3: {
    flexDirection: "row",
    paddingVertical: hp("1.2%"),
    paddingLeft: wp("5%"),
  },
  col3: {
    marginRight: wp("5%"),
    alignItems: "center",
  },
  img5: {
    width: wp("9%"),
    height: hp("3.6%"),
  },
  img6: {
    width: wp("7.5%"),
    height: hp("3.8%"),
  },
});
