import { useFormik } from "formik";
import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Input from "../../components/Input/Input";
import { useTheme } from "@react-navigation/native";
import { Feather as Icon } from "@expo/vector-icons";

const { width: wWidth, height: wHeight } = Dimensions.get("window");
const validationSchema = Yup.object().shape({
  email: Yup.string().required("Required"),
});
export default function ForgotPassword({ navigation }) {
  const { colors } = useTheme();
  const { handleChange, values, errors, touched, handleSubmit, handleBlur } =
    useFormik({
      validationSchema,
      initialValues: { email: "" },
      onSubmit: (values) => {
        console.log("values", values);
      },
    });
  return (
    <View style={styles.container}>
      <View
        style={{
          position: "absolute",
          top: wWidth * 0.2,
          left: wWidth * 0.1,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon color={"#2fb28f"} name="arrow-left" size={26} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require("../../images/logo.png")} style={styles.logo} />
        <Text style={{ ...styles.signUptext, color: colors.text }}>JOZEKO</Text>
      </View>
      <View style={styles.content}>
        <Input
          onBlur={handleBlur("email")}
          errors={errors.email}
          touched={touched.email}
          name="email"
          value={values.email}
          icon="mail"
          placeholder="Enter Email Address "
          onChangeText={handleChange("email")}
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
