import React from "react";
import { StyleSheet } from "react-native";
import { List, Avatar, useTheme } from "react-native-paper";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";

  
const UserListMedium = () => {
  const { colors } = useTheme();
  return (
    <List.Item
      title="Emma Davis"
      description="Traveller, life lover"
      titleStyle={styles.title}
      descriptionStyle={styles.description}
      left={(props) => (
        <Avatar.Image
          style={{ alignSelf: "center", backgroundColor: colors }}
          size={wp("8%")}
          source={require("../../images/post.png")}
        />
      )}
    />
  );
};

export default UserListMedium;

const styles = StyleSheet.create({
  title: {
    color: "#fafafa",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.5%"),
  },
  description: {
    color: "#fafafa",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1%"),
    marginTop: -hp("0.5%"),
  },
});
