import React from "react";
import { StyleSheet } from "react-native";
import { List, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LiveComments = ({ name, comment, sz, img }) => {
  const { colors } = useTheme();
  return (
    <List.Item
      title={name || "Thomas Storm"}
      description={comment || "Wow Beautiful...❤️"}
      titleStyle={styles.title}
      descriptionStyle={styles.description}
      left={(props) => (
        <Avatar.Image
          style={{ alignSelf: "center", backgroundColor: colors }}
          size={sz || wp("12%")}
          source={img || require("../../images/3.png")}
        />
      )}
    />
  );
};

export default LiveComments;

const styles = StyleSheet.create({
  title: {
    color: "#fafafa",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
  },
  description: {
    color: "#fafafa",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
    marginTop: -3,
  },
});
