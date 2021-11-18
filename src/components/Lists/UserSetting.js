import React from "react";
import { StyleSheet } from "react-native";
import { List, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const UserSetting = ({ title, desc, bg, sz, img }) => {
  const { colors } = useTheme();
  return (
    <List.Item
      style={styles.cont}
      title={title || "Don Barry"}
      description={desc || "Traveller, life lover"}
      titleStyle={{
        ...styles.title,
        color: colors.text,
        fontSize: bg ? hp("2.8%") : hp("2.4%"),
      }}
      descriptionStyle={{
        ...styles.description,
        fontSize: bg ? hp("1.9%") : hp("1.5%"),
      }}
      left={(props) => (
        <Avatar.Image
          style={{
            alignSelf: "center",
            marginRight: 10,
            backgroundColor: colors,
          }}
          size={sz || hp("7%")}
          source={img || require("../../images/av2.png")}
        />
      )}
    />
  );
};

export default UserSetting;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
  },
  description: {
    color: "#b8b8b8",
    fontFamily: "Poppins_400Regular",
    marginTop: -hp("1%"),
  },
  cont:{
     paddingHorizontal: 20
  }
});
