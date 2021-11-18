import React from "react";
import { StyleSheet } from "react-native";
import { List, Badge, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ActiveUser = ({ dr }) => {
  const { colors } = useTheme();
  return (
    <List.Item
      title="Don Barry"
      description="Online"
      titleStyle={{ ...styles.title, color: dr ? colors.text : '#FFF' }}
      descriptionStyle={{ ...styles.description, color: dr ? colors.text : '#FFF' }}
      left={(props) => (
        <>
          <Avatar.Image
            style={{ alignSelf: "center", backgroundColor: "transparent" }}
            size={wp("15%")}
            source={require("../../images/av2.png")}
          />
          <Badge size={18} style={styles.badg} />
        </>
      )}
    />
  );
};

export default ActiveUser;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
    marginLeft: -10
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.6%"),
    marginTop: -hp("0.5%"),
    marginLeft: -10
  },
  badg: {
    bottom: hp("0.3%"),
    left: wp("-4.5%"),
    backgroundColor: "#25f8bd",
  },
});
