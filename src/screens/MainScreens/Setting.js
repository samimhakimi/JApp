import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import HeaderContainer from "../../containers/HeaderContainer";
import Icon from "@expo/vector-icons/AntDesign";
import SearchSetting from "../../components/Input/SearchSetting";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import UserSetting from "../../components/Lists/UserSetting";
import SettingsList from "../../components/Lists/SettingsList";
import MiniSettingsList from "../../components/Lists/MiniSettingsList";
import { useTheme } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import MenuButton from "../../components/Buttons/MenuButton";


const Setting = (props) => {
  
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar backgroundColor="#2fb28f" />
      <HeaderContainer>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="left"
            size={hp("3.8%")}
            color={colors.text}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={{ ...styles.pageTitle, color: colors.text }}>Settings</Text>
   
      </HeaderContainer>
   
      <UserSetting
        title="Danielle Rose"
        desc="Danielle@rose"
        sz={hp("9%")}
        img={require("../../images/04.png")}
      />
      <SettingsList img={require("../../images/gen.png")} title="General" />
      <SettingsList img={require("../../images/desc.png")} title="Display" />
      <MiniSettingsList themeChange title="Dark Mode" right />
      <MiniSettingsList title="Wallpaper Setting" />
      <MiniSettingsList title="Color Scheme" />
      <SettingsList img={require("../../images/bell.png")} title="Privacy" />
      <MiniSettingsList title="Private Mode" right />
      <MiniSettingsList title="Allow Location" right />
      <MiniSettingsList title="Share Post" right />
      <SettingsList
        img={require("../../images/be.png")}
        title="Push Notifications"
      />
      <MiniSettingsList title="Allow Notifications" right />
      <MiniSettingsList title="Change Password" />
      <SettingsList
        img={require("../../images/dol.png")}
        title="Promotion Settings"
      />
      <MiniSettingsList onPress={()=>props.navigation.navigate("Promotion")} title="Payment Method" />
      <SettingsList img={require("../../images/info.png")} title="Help" />
      <View style={styles.bot} />
      <MenuButton />
    </SafeAreaView>
  );
};

export default Setting;

const styles = StyleSheet.create({
  backIcon: {
    paddingLeft: hp("3.8%"),
    paddingTop: hp("4.5%"),
  },
  pageTitle: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("4.3%"),
    color: "#000",
    letterSpacing: 2,
    paddingLeft: hp(2.5),
    flex: 1,
    paddingTop: hp("4.5%"),
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: hp("3.8%"),
    paddingTop: hp("4.5%"),
  },
  check: {
    width: hp("3%"),
    height: hp("2.4%"),
  },
  done: {
    color: "#000",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
  },
  bot: {
    marginBottom: hp("10%"),
  },
});
