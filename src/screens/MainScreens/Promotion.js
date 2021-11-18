import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import Icon from "@expo/vector-icons/AntDesign";
import UserSetting from "../../components/Lists/UserSetting";
import HeaderContainer from "../../containers/HeaderContainer";
import PackageList from "../../components/Lists/PackageList";
import ConfirmButton from "../../components/Buttons/ConfirmButton";
import MenuButton from "../../components/Buttons/MenuButton";
import { Appbar } from "react-native-paper";


const Promotion = (props) => {
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: colors.background, flex: 1 }}>
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
        <Text style={{ ...styles.pageTitle, color: colors.text }}>Promotion</Text>
      </HeaderContainer>
      <ScrollView>
        <View style={styles.detailsContainer}>
          <UserSetting
            title="Abraham Gustin"
            desc="@abrahamgustin"
            sz={hp("11%")}
            img={require("../../images/guy.png")}
            bg
          />
          <Text style={{...styles.medText,color:colors.text}}>Promotion Package</Text>
        </View>
        <View style={styles.packContainer}>
          <PackageList duration="$5/Day" status="Unlimited" />
          <PackageList duration="$30/Week" status="Unlimited" gr />
          <PackageList duration="$100/Month" status="Unlimited" />
        </View>
        <Text style={{ ...styles.medText, color: colors.text }}>Payment Method</Text>
        <View style={styles.paymentContainer}>
          <Appbar.Action   
            color="#2fb28f"
            size={hp("7%")}
            icon={require("../../images/apay.png")}
            onPress={() => { }}
          />
          <Appbar.Action
            color={colors.text}
            size={hp("7%")}
            icon={require("../../images/gpay.png")}
            onPress={() => { }}
          />
          <Appbar.Action
            color={colors.text}
            size={hp("7%")}
            icon={require("../../images/credit.png")}
            onPress={() => { }}
          />
        </View>
        <ConfirmButton />
      </ScrollView>
      <MenuButton />
    </View>
  );
};

export default Promotion;

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
    paddingLeft: hp("7%"),
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
    color: "#FFF",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
  },
  payImg: {
    height: 35,
    width: 70,
  },
  paymentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("15%"),
    // marginTop: hp("3%"),
    marginBottom: hp("5.2%"),
  },
  medText: {
    fontFamily: "Poppins_500Medium",
    fontSize: hp("3.3%"),
    alignSelf: "center",
    marginTop: hp("8%"),
  },
  packContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("10%"),
    marginTop: hp("3%"),
  },
  detailsContainer: {
    paddingHorizontal: hp("1%"),
  },
});
