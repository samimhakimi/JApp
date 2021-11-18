import React from "react";
import {
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Avatar, useTheme } from "react-native-paper";
import ProfileFollow from "../Buttons/ProfileFollow";

const ProfileDescription = ({ onBackPress, navigateToEdit }) => {
  const { colors } = useTheme();
  const privateProfile = true;
  return (
    <ImageBackground
      source={require("../../images/guy.png")}
      style={styles.container}
    >
      <TouchableOpacity
        onPress={onBackPress}
        style={{ ...styles.backContainer, backgroundColor: colors.background }}
      >
        <Image source={require("../../images/ab.png")} style={styles.bkImg} />
      </TouchableOpacity>
      <View style={styles.transparentBack} />

      <View style={styles.shadePart}>
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={wp("18%")}
          source={require("../../images/proph.png")}
        />
        <View
          style={{
            paddingHorizontal: wp("3%"),
          }}
        >
          <Text style={styles.title}>Abraham Gustin</Text>
          <Text style={styles.description}>@Abraham</Text>
          <Text style={styles.about}>San Francisco, CA</Text>
          <Text style={styles.address}>
            I am designer with 20 years experiance
          </Text>
        </View>
      </View>
      <View style={styles.btnCont}>
        {!privateProfile ? (
          <ProfileFollow
            onPress={() => console.log("Trigger Follow Item")}
            btnName="Follow"
          />
        ) : (
          <ProfileFollow
            onPress={() => navigateToEdit()}
            btnName="Edit Profile"
          />
        )}

        {privateProfile ? (
          <>
            <TouchableOpacity
              style={{
                ...styles.btnSm,
                marginHorizontal: hp("1%"),
              }}
            >
              <Image
                source={require("../../images/lk.png")}
                style={styles.lkIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnSm}>
              <Image
                source={require("../../images/pbu.png")}
                style={styles.chatIcon}
              />
            </TouchableOpacity>
          </>
        ) : null}
      </View>
    </ImageBackground>
  );
};

export default ProfileDescription;

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("3.85%"),
  },
  description: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.2%"),
    marginTop: -hp("1.2%"),
  },
  about: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.55%"),
    marginTop: -hp("0.5%"),
    zIndex: 1,
  },
  address: {
    color: "#fff",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.55%"),
    zIndex: 1,
    marginTop: -hp("0.7%"),
  },
  container: {
    width: wp("100%"),
    height: hp("44%"),
    paddingHorizontal: wp("2.5%"),
  },
  backContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp("4.5%"),
    height: hp("4.5%"),
    width: hp("4.5%"),
    marginTop: hp("5%"),
    left: hp("3%"),
    position: "absolute",
  },
  bkImg: {
    width: hp("1%"),
    height: hp("2%"),
  },
  transparentBack: {
    opacity: 0.4,
    backgroundColor: "#000",
    position: "absolute",
    height: hp("20%"),
    width: wp("100%"),
    bottom: 0,
  },
  listCont: {
    zIndex: 1,
    marginTop: hp("30%"),
  },
  btnCont: {
    paddingHorizontal: wp("3%"),
    marginTop: hp("2.5%"),
    flexDirection: "row",
    alignItems: "center",
  },
  btnSm: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: hp("4.5%"),
    borderWidth: 1,
    borderColor: "#5bc8c2",
    height: hp("4.5%"),
    width: hp("4.5%"),
  },
  lkIcon: {
    width: wp("4.2%"),
    height: hp("2.5%"),
  },
  chatIcon: {
    width: wp("4.5%"),
    height: hp("2%"),
  },
  shadePart: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("24.2%"),
    paddingHorizontal: hp("1.5%"),
  },
});
