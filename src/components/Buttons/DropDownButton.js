import React, { useState } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const DropDownButton = () => {
  const [font, setFont] = useState("ni");
  const { colors } = useTheme();
  return (
    <DropDownPicker
      items={[
        {
          label: "Montser",
          value: "mon",
        },
        {
          label: "Nirmala UI",
          value: "ni",
        },
        {
          label: "Poppins",
          value: "po",
        },
      ]}
      labelStyle={{
        color: colors.text,
        fontFamily: "Poppins_400Regular",
        fontSize: hp("1%"),
      }}
      defaultValue={font}
      containerStyle={{ height: hp("2.6") }}
      style={{ ...styles.dpStyle, borderColor: colors.text }}
      itemStyle={{
        justifyContent: "flex-start",
      }}
      dropDownStyle={{ backgroundColor: colors.background }}
      onChangeItem={(item) => setFont(item.value)}
    />
  );
  //   }
};

export default DropDownButton;

const styles = StyleSheet.create({
  dpStyle: {
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: "transparent",
    width: wp("30%"),
    paddingTop: 0,
    paddingBottom: 0,
  },
});
