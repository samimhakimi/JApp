import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const Input = (
  {
    placeholder,
    handleShowPassword,
    eye,
    login,
    onChangeText,
    errors,
    touched,
    icon,
    secured,
  },
  ...props
) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        ...styles.inputSection,
        backgroundColor: login ? "#FFF" : colors.background,
        borderBottomColor: errors ? colors.error : "#2FB28F",
      }}
    >
      <Icon
        style={styles.icon}
        name={icon}
        size={21}
        color={errors ? colors.error : "#939393"}
      />
      <TextInput
        style={{
          ...styles.input,
          backgroundColor: login ? "#FFF" : colors.background,
          color: "#939393",
        }}
        placeholder={placeholder}
        placeholderTextColor={"#939393"}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        secureTextEntry={secured}
        {...{ props }}
      />
      {eye ? (
        <TouchableOpacity onPress={() => handleShowPassword()}>
          <Icon
            style={styles.icon}
            name={!secured ? "eye" : "eye-off"}
            size={15}
            color={"#939393"}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputSection: {
    paddingTop: wp("2%"),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1.6,
  },
  icon: {
    paddingTop: hp("1.2%"),
    paddingRight: 10,
  },
  input: {
    flex: 1,
    paddingTop: hp("1.5%"),
    paddingRight: 10,
    paddingLeft: 0,
    fontSize: hp("1.7%"),
    fontFamily: "Poppins_400Regular",
  },
});
