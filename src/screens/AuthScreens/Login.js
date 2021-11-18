import React, { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import Button from "../../components/Buttons/Button";
import LoginForm from "../../components/Forms/LoginForm";
import * as Yup from "yup";

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import Icon from "@expo/vector-icons/AntDesign";
import { useFormik } from "formik";
import { loginAction } from "../../redux/actions/authActions";
import { connect } from "react-redux";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),

  email: Yup.string().required("Required"),
});
const Login = (props) => {
  const { colors } = useTheme();
  const [isShowPassword, setIsShowPassword] = useState(true);
  const {
    handleChange,
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    setFieldValue,
  } = useFormik({
    validationSchema,
    initialValues: { email: "", password: "", isRemember: false },

    onSubmit: async (values) => {
      const data = {
        email: values.email,
        password: values.password,
      };
      const response = await props.loginUser(data);
      console.log("loginResponse from Above AsyncStorage", response);
      if (response && (response.token || response.idToken)) {
         
          await AsyncStorage.setItem('idToken', response.idToken)
     
        props.navigation.navigate("Home");
      } else {
        if (Platform.OS === "android") {
          ToastAndroid.showWithGravity(
            props.authState.error,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        } else {
          Alert.alert("Error", props.authState.error, [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      }
    },
  });

  const toggleSwitch = () => setFieldValue("isRemember", !values.isRemember);

  const handleShowPassword = () => {
    console.log("handleShow");
    setIsShowPassword(!isShowPassword);
  };
  const handleForgotPassword = () => {
    props.navigation.navigate("ForgotPassword");
  };
  const { authState } = props;
  return (
    <View style={{ ...styles.main, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={(Platform.OS = "ios" ? "padding" : "height")}
      >
        <View style={styles.cntn}>
          <Image
            source={require("../../images/logo.png")}
            style={styles.logo}
          />
          <Text style={{ ...styles.signUptext, color: colors.text }}>
            JOZEKO
          </Text>
          <LoginForm
            {...{
              authState,
              isShowPassword,
              handleShowPassword,
              values,
              handleBlur,
              handleChange,
              errors,
              touched,
            }}
            handleForgotPassword={handleForgotPassword}
            onPress={handleSubmit}
          />
          <View style={styles.lgnContainer}>
            <Text style={{ ...styles.txtRemember, color: colors.text }}>
              Remember me?{" "}
            </Text>
            <View
              style={{
                ...styles.switchBack,
                backgroundColor: values.isRemember ? "#55b8a5" : "#FFF",
              }}
            >
              <Switch
                trackColor={{ false: "#fff", true: "#55b8a5" }}
                thumbColor={values.isRemember ? "#fff" : "#55b8a5"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch}
                value={values.isRemember}
                style={{
                  transform: [{ scaleX: hp("0.13%") }, { scaleY: hp("0.12%") }],
                }}
              />
            </View>
          </View>
          <View style={styles.lgnContainer}>
            <Text style={{ ...styles.txtAlready, color: colors.text }}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("SignUp")}
            >
              <Text style={styles.txtLogin}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <View style={{ ...styles.line, color: colors.text }} />
            <Text style={{ ...styles.txtOr, color: colors.text }}>or</Text>
            <View style={{ ...styles.line, color: colors.text }} />
          </View>
          <Button bg={colors.text}>
            <Icon name="apple1" size={hp("2.4%")} color={colors.background} />
            <Text style={{ ...styles.btntxt, color: colors.background }}>
              SIGN UP WITH APPLE
            </Text>
          </Button>
          <Button bg="#F8F8F8" border>
            <Image
              source={require("../../images/google.png")}
              style={styles.btnIcon}
            />
            <Text style={{ ...styles.btntxt, color: "#787b80" }}>
              SIGN UP WITH GOOGLE
            </Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    authState: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (data) => dispatch(loginAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
  signUptext: {
    fontSize: hp("4%"),
    color: "#FFF",
    alignSelf: "center",
    fontFamily: "Poppins_900Black",
  },
  txtAlready: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.5%"),
  },
  txtRemember: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
  },
  txtLogin: {
    fontSize: hp("1.7%"),
    color: "#37bb97",
    paddingHorizontal: 3,
    fontFamily: "Poppins_400Regular",
  },
  lgnContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  line: {
    borderBottomWidth: 1,
    width: wp("22%"),
    borderBottomColor: "#9b9ea2",
    marginTop: 5,
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: hp("1%"),
  },
  txtOr: {
    fontSize: 10,
    paddingHorizontal: 4,
    fontWeight: "bold",
    fontFamily: "Poppins_400Regular",
    color: "#9b9ea2",
  },
  btntxt: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("1.7%"),
    paddingHorizontal: 10,
    paddingTop: hp("0.6%"),
  },
  btnIcon: {
    height: hp("2.2%"),
    width: hp("2.2%"),
  },
  logo: {
    width: hp("6%"),
    alignSelf: "center",
    height: hp("7%"),
  },
  main: {
    flex: 1,
  },
  cntn: {
    justifyContent: "center",
    flex: 1,
  },
  switchBack: {
    height: hp("3.5%"),
    width: wp("12.5"),
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
    marginHorizontal: 5,
  },
});
