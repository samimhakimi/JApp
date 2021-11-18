import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Input from "../Input/Input";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Yup from "yup";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFormik } from "formik";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const LoginForm = ({
  onPress,
  handleChange,
  values,
  errors,
  handleBlur,
  touched,
  isShowPassword,
  handleShowPassword,
  handleForgotPassword,
  authState,
}) => {
  return (
    <>
      <View style={styles.container}>
        <Input
          login
          icon="user"
          name="email"
          placeholder="Username/Email"
          onChangeText={handleChange("email")}
          onBlur={handleBlur("email")}
          value={values.email}
          errors={errors.email}
          touched={touched.email}
        />
        <Input
          onBlur={handleBlur("password")}
          errors={errors.password}
          touched={touched.password}
          name="password"
          value={values.password}
          login
          eye
          icon="lock"
          placeholder="Password"
          secured={isShowPassword}
          // isShowPassword={isShowPassword}
          handleShowPassword={handleShowPassword}
          onChangeText={handleChange("password")}
        />
        <TouchableOpacity
          onPress={() => handleForgotPassword()}
          style={styles.forgotContainer}
        >
          <Text style={styles.textForgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onPress} style={styles.btn}>
        <View
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {authState.isAuthenticating ? (
            <ActivityIndicator color={"#ffffff"} />
          ) : (
            <Text style={styles.btnText}>LOGIN</Text>
          )}
        </View>
      </TouchableOpacity>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: wp("80%"),
    borderRadius: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#2fb28f",
    marginTop: hp("2%"),
    alignSelf: "center",
    paddingVertical: 5,
    paddingHorizontal: 30,
    paddingBottom: hp("10%"),
  },
  btn: {
    backgroundColor: "#2FB28F",
    alignSelf: "center",
    height: hp("5.5%"),
    width: wp("30%"),
    borderRadius: 18,
    marginTop: -hp("3%"),
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.16,
    elevation: 2,
  },
  btnText: {
    color: "#F5F5F5",
    fontSize: hp("2%"),
    fontFamily: "Poppins_400Regular",
  },
  forgotContainer: {
    alignItems: "center",
    marginTop: hp("3%"),
  },
  textForgot: {
    color: "#2680eb",
    fontSize: hp("1.5%"),
    fontFamily: "Poppins_400Regular",
  },
});
