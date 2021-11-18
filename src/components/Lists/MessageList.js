import React from "react";
import { StyleSheet, TouchableOpacity, Text, View, Image } from "react-native";
import { Avatar, Badge, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const MessageList = ({
  img,
  name,
  desc,
  voice,
  imageMessage,
  duration,
  active,
  text,
  send,
  onPress
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Badge
        size={18}
        style={{
          ...styles.badg,
          backgroundColor: active ? "#25f8bd" : "#bfc4d3",
        }}
      />
      <Avatar.Image
        style={{ backgroundColor: colors.background }}
        size={wp("19%")}
        source={img}
      />
      <View style={styles.txtCont}>
        <Text style={{ ...styles.name, color: colors.text }}>{name}</Text>

        {send == true ? null : (
          <View style={styles.contentContainer}>
            {text ? null : (
              <Icon
                name={
                  voice
                    ? "google-podcast"
                    : imageMessage
                    ? "image-outline"
                    : "play"
                }
                size={hp("2%")}
                color="#eb5e6e"
                style={styles.textIco}
              />
            )}

            <Text
              style={{ ...styles.content, color: text ? "#bcc1d0" : "#eb5e6e" }}
            >
              {desc}
            </Text>
          </View>
        )}
      </View>
      {send == true ? null : (
        <View style={{ alignSelf: "center" }}>
          <TouchableOpacity style={styles.gbuttoncontainer}>
            <Text style={styles.btitle}>{duration}</Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MessageList;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    marginBottom: hp("2%"),
    alignItems: "center",
  },
  txtCont: {
    paddingLeft: wp("3%"),
    paddingRight: wp("0.2%"),
    width: wp("50%"),
  },
  name: {
    letterSpacing: 2.5,
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  content: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.3%"),
    letterSpacing: 2.5,
  },
  liked: {
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    paddingLeft: wp("7%"),
    alignSelf: "center",
    marginTop: -hp("1.5%"),
  },
  num: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1%"),
    color: "#7a8fa6",
    alignSelf: "center",
    paddingLeft: wp("1%"),
  },
  gbuttoncontainer: {
    width: wp("20%"),
    height: hp("3.5%"),
    backgroundColor: "#2fb28f",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  btitle: {
    color: "#EEE",
    fontSize: hp("1.3%"),
    fontFamily: "Poppins_700Bold",
    letterSpacing: 2.5,
  },
  textIco: {
    paddingHorizontal: hp("0.5"),
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  badg: {
    position: "absolute",
    bottom: hp("1.5%"),
    left: wp("18%"),
    zIndex: 1,
  },
});
