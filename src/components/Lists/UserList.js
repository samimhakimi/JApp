import React from "react";
import { StyleSheet } from "react-native";
import { List, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const UserList = ({title,desc,sz,img}) => {
  const { colors } = useTheme();
  return (
    <List.Item
      title={title || "Emma Davis"}
      description={desc || "Traveller, life lover"}
      titleStyle={styles.title}
      descriptionStyle={styles.description}
      left={(props) => (
        <Avatar.Image
          style={{ alignSelf: "center", backgroundColor: colors }}
          size={sz || wp("12%")}
          source={img || require("../../images/post.png")}
        />
      )}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  title: {
    color: "#fafafa",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  description: {
    color: "#fafafa",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
    marginTop: -3,
  },
});
