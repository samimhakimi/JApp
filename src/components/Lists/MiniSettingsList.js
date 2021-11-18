import React, { useState } from "react";
import { StyleSheet,TouchableOpacity, Switch, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../../contexts/context";
// import { TouchableOpacity } from "react-native-gesture-handler";

const MiniSettingsList = ({ onPress, themeChange, title, right }) => {
  const { toggleTheme } = React.useContext(ThemeContext);
  const { colors } = useTheme();
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleDarkSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme()
  }
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.txtCont} onPress={onPress}>
        <Text style={{ ...styles.text, color: colors.text }}>{title}</Text>
      </TouchableOpacity>
      {right ? (
        <View
          style={{
            ...styles.switchBack,
            backgroundColor: isEnabled ? "#55b8a5" : colors.toggleDark,
          }}
        >
          <Switch
            trackColor={{ false: colors.toggleDark, true: "#55b8a5" }}
            thumbColor={isEnabled ? colors.toggleThumb : "#55b8a5"}
            ios_backgroundColor="#FFFFFF"
            onValueChange={themeChange ? toggleDarkSwitch : toggleSwitch}
            value={isEnabled}
            style={{
              transform: [{ scaleX: hp("0.13%") }, { scaleY: hp("0.12%") }],
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

export default MiniSettingsList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: hp("5%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("0.8%"),
  },
  text: {
    fontSize: hp(1.5),
    fontFamily: "Poppins_400Regular",
  },
  txtCont:{
    paddingLeft: wp("3%"),
    flex: 1,
  },
  switchBack: {
    height: hp('3.5%'),
    width: wp('12.5'),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: hp("5"),
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,
    elevation: 4,
  },
});
