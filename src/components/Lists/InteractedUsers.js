import React from "react";
import { StyleSheet, View } from "react-native";
import { List, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import GreenButton from "../Buttons/GreenButton";

const InteractedUsers = ({ name, img, username, followed }) => {
  const { colors } = useTheme();
  return (
    <>
      <List.Item
        title={name}
        description={username}
        titleStyle={{ ...styles.title, color: colors.text }}
        descriptionStyle={{ ...styles.description, color: colors.text }}
        left={(props) => (
          <Avatar.Image
            style={{ alignSelf: "center", backgroundColor: colors.background }}
            size={wp("12")}
            source={img}
          />
        )}
      />
      {followed == false ? (
        <View style={styles.btn}>
          <GreenButton title="Follow" />
        </View>
      ) : null}
    </>
  );
};

export default InteractedUsers;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
    marginTop: -hp("0.7%"),
  },
  btn: {
    alignSelf: "flex-end",
    marginTop: hp("1.3%"),
    marginBottom: -hp("5%"),
  },
});
