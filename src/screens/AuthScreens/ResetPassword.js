import { useFormik } from "formik";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../../components/Input/Input";
import { useTheme } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
});
export default function ResetPassword() {
  const { colors } = useTheme();
  const { handleChange, values, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      validationSchema,
      initialValues: { oldPassword: "", newPassword: "", confirmPassword: "" },
      onSubmit: (values) => {
        console.log("values", values);
      },
    });
  return (
    <View style={styles.container}>
      <View>
        <Image source={require("../../images/logo.png")} style={styles.logo} />
        <Text style={{ ...styles.signUptext, color: colors.text }}>JOZEKO</Text>
      </View>
      <View style={styles.content}>
        <Input
          onBlur={handleBlur("oldPassword")}
          errors={errors.oldPassword}
          touched={touched.oldPassword}
          secured
          name="email"
          value={values.oldPassword}
          icon="lock"
          placeholder="Enter Your old Password"
          onChangeText={handleChange("oldPassword")}
        />
        <Input
          onBlur={handleBlur("newPassword")}
          errors={errors.newPassword}
          touched={touched.newPassword}
          name="newPassword"
          value={values.newPassword}
          icon="lock"
          placeholder="Enter New Password"
          onChangeText={handleChange("newPassword")}
        />
        <Input
          onBlur={handleBlur("confirmPassword")}
          errors={errors.confirmPassword}
          touched={touched.confirmPassword}
          name="confirmPassword"
          value={values.confirmPassword}
          icon="lock"
          placeholder="Repeat new password"
          onChangeText={handleChange("confirmPassword")}
        />
        <View style={styles.buttonPosition}>
          <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
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
    justifyContent: "center",
  },
  btnText: {
    color: "#F5F5F5",
    fontSize: hp("2%"),
    fontFamily: "Poppins_400Regular",
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
  buttonPosition: {
    position: "absolute",
    bottom: -20,
    marginHorizontal: wp("25%"),
  },
  signUptext: {
    fontSize: hp("4%"),
    color: "#FFF",
    alignSelf: "center",
    fontFamily: "Poppins_900Black",
  },
  logo: {
    width: hp("6%"),
    alignSelf: "center",
    height: hp("7%"),
  },
});
