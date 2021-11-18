import React, { useState } from "react";
import { useTheme, Appbar, Avatar, Badge } from "react-native-paper";
import {Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, View, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ onBubblePress, navigateToNotification, userData, navigateToChangeProfilePic }) => {
  const { colors } = useTheme();
  const [active, setActive] = useState(true);
  const [online, isOnline] = useState(false);


  return (
    <Appbar.Header
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <View style={styles.rw}>
        <TouchableOpacity onPress={navigateToChangeProfilePic} >
        <View>
        <Image style={{width: 55, height: 55, borderRadius: 30}} source={{ uri: userData.ProfilePic}} defaultSource={require('../../images/Newuser.jpeg')} />
        </View>
        </TouchableOpacity>
        <View>
          <Badge size={hp("1.8%")} style={styles.avatarBadge} />
        </View>
      </View>
      <Appbar.Content title="JOZEKO" titleStyle={styles.appTitle} />
      <View style={styles.rw}>
        <View>
          <Appbar.Action
            style={styles.bell}
            size={hp("2.5%")}
            color={colors.text}
            icon={require("../../images/fill.png")}
            onPress={() => navigateToNotification()}
          />
        </View>
        <View>
          <Badge
            size={hp("1%")}
            style={{
              ...styles.bellBadge,
              backgroundColor: active ? "red" : "#0014ff",
            }}
          />
        </View>
      </View>
      <View style={styles.rw}>
        <TouchableOpacity onPress={onBubblePress}>
          <Appbar.Action
            style={styles.bubble}
            size={hp("2.5%")}
            color={colors.text}
            icon={require("../../images/message.png")}
            onPress={() => {}}
          />
        </TouchableOpacity>
        <View>
          <Badge
            size={hp("1%")}
            style={{
              ...styles.bubbleBadge,
              backgroundColor: active ? "#0014ff" : "red",
            }}
          />
        </View>
      </View>
    </Appbar.Header>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    elevation: 0,
    marginTop: 2,
    paddingHorizontal: wp("5.5%"),
  },
  avatar: {
    justifyContent: "center",
  },
  bell: {
    marginRight: wp("-1%"),
    marginTop: Platform.OS === "ios" ? wp("9%") : wp("8%"),
  },
  bubble: {
    marginRight: wp("-1%"),
    marginTop: Platform.OS === "ios" ? wp("9%") : wp("8%"),
  },
  bellBadge: {
    marginLeft: -wp("1.8%"),
    marginTop: Platform.OS === "ios" ? hp("6%") : hp("6%"),
  },
  bubbleBadge: {
    marginLeft: -wp("1.6%"),
    marginTop: Platform.OS === "ios" ? hp("6%") : hp("6%"),
  },
  avatarBadge: {
    marginLeft: -hp("2.2%"),
    backgroundColor: "#25f8bd",
    marginTop: hp("4.8%"),
  },
  appTitle: {
    color: "#2fb28f",
    fontFamily: "Poppins_900Black",
    fontSize: Platform.OS === "ios" ? hp("4.5%") : hp("5%"),
    alignSelf: "center",
    paddingTop: Platform.OS === "ios" ? hp("1%") : hp("1%"),
  },
  rw: {
    flexDirection: "row",
  },
});
