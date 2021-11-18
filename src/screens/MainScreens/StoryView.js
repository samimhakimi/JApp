import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, ProgressBar, useTheme } from "react-native-paper";
import Icon from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Stories from "../../components/Stories/Stories";
const DATA = [
  {
    id: 1,
    source: require("../../images/storyImages/story1.jpg"),
  },
  {
    id: 2,
    source: require("../../images/storyImages/story2.jpeg"),
  },
  {
    id: 3,
    source: require("../../images/storyImages/story3.jpg"),
  },
];
const StoryView = (props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.page}>
      <View style={{ ...StyleSheet.absoluteFill }}>
        <Stories stories={DATA} />
      </View>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="chevron-thin-left" size={hp("2.5%")} color="#FFF" />
        </TouchableOpacity>
        <View>
          <Avatar.Image
            style={styles.avatar}
            size={wp("12%")}
            source={require("../../images/04.png")}
          />
        </View>

        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name="dots-three-vertical" size={hp("2.5%")} color="#FFF" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>Danielle Rose</Text>
      <View style={styles.btm}>
        <Feather name="chevrons-up" size={hp("6%")} color="#FFF" />
        <Text style={styles.txtReply}>Reply</Text>
      </View>

      <ProgressBar progress={0.3} color="#55b8a5" backgroundColor="#FFF" />
      <View style={{ margin: hp("1%") }} />
    </View>
  );
};

export default StoryView;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: wp("5%"),
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    marginTop: hp("5%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  avatar: {
    alignSelf: "center",
    backgroundColor: "transparent",
  },
  name: {
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.8%"),
    marginTop: hp("1.2%"),
    alignSelf: "center",
  },
  btm: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: hp("2.5%"),
  },
  txtReply: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
    color: "#FFF",
  },
});
