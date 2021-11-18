import * as React from "react";
import { Card, Badge, Avatar } from "react-native-paper";
import { StyleSheet, Text, View, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const UsersPro = ({ onPress, img, name, following, live }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        marginLeft: following ? wp("2%") : wp("4%"),
        marginRight: following ? wp("6%") : 0,
        marginBottom: following ? hp("1%") : null,
        height: following ? hp("12.5%") : hp("10%"),
        width: following ? hp("8%") : hp("8%"),
      }}
    >
      <Card.Cover
        style={{
          ...styles.image,
          borderRadius: 5,
          height: following ? hp("11.59%") : hp("9.6%"),
          width: following ? hp("9.5%") : hp("8.5%"),
        }}
        source={img}
      />

      {live ? (
        <View style={styles.badgeBack}>
          <Text style={styles.badgeText}>LIVE</Text>
        </View>
      ) : null}
      <Avatar.Image
        size={following ? hp("4%") : hp("3.3%")}
        source={img}
        style={{
          ...styles.avatar,
          marginTop: following ? -hp("3.6%") : -hp("2.9%"),
          marginLeft: following ? hp("7.3%") : hp("6%"),
          backgroundColor: "#FFF",
        }}
      />
      <Text
        style={{
          ...styles.title,
          color: colors.text,
          fontSize: following ? hp("1%") : hp("0.8%"),
        }}
      >
        {name}
      </Text>
      <View
        style={{
          ...styles.borderCircle,
          borderColor: colors.text,
          width: following ? hp("4%") : hp("3.4%"),
          height: following ? hp("4%") : hp("3.4%"),
          marginTop: following ? hp("8%") : hp("6.65%"),
          marginLeft: following ? hp("7.3%") : hp("5.98%"),
        }}
      />
    </View>
  );
};
export default UsersPro;

const styles = StyleSheet.create({
  container: {
    elevation: 0,
  },
  image: {
    resizeMode: "center",
  },
  title: {
    fontFamily: "Poppins_400Regular",
    alignSelf: "center",
  },
  borderCircle: {
    position: "absolute",
    borderRadius: 50,
    borderWidth: 1.5,
  },
  badgeBack: {
    backgroundColor: "#fd5757",
    position: "absolute",
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: hp("1.2%"),
    width: wp("5.5%"),
    marginLeft: Platform.OS === "ios" ? wp("15%") : wp("13%"),
    marginTop: hp("0.5%"),
    borderRadius: 10,
  },
  badgeText: {
    fontFamily: "Poppins_400Regular",
    alignSelf: "center",
    fontSize: hp("0.8%"),
    color: "#FFF",
  },
});
