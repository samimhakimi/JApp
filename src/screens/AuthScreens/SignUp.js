import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ToastAndroid,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Button from "../../components/Buttons/Button";
import Form from "../../components/Forms/Form";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import { ThemeContext } from "../../contexts/context";
import Icon from "@expo/vector-icons/AntDesign";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { registerAction } from "../../redux/actions/authActions";
import { ScrollView } from "react-native-gesture-handler";
const validationSchema = Yup.object({
  fname: Yup.string().required("Required"),
  lname: Yup.string().required("Required"),
  username: Yup.string().required("Required"),
  email: Yup.string().email("This should be an email").required("Required"),
  dob: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});
const SignUp = (props) => {
  // const { toggleTheme } = React.useContext(ThemeContext);
  const {
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    values,
  } = useFormik({
    validationSchema,
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      email: "",
      dob: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log("values", values);
      const data = {
        Fname: values.fname,
        Lname: values.lname,
        username: values.username,
        email: values.email,
        dob: values.dob,
        password: values.password,
        confirmPassword: values.password,
      };
      const response = await props.registerUser(data);
      console.log("Signup ", response);
      if (response) {
        if (Platform.OS === "android") {
          ToastAndroid.showWithGravity(
            "Verify your Email",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
        props.navigation.navigate("Home");
      } else {
        if (Platform.OS === "android") {
          ToastAndroid.showWithGravity(
            props.authState.error,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      }
    },
  });
  const { colors } = useTheme();
  const { authState } = props;
  return (
    <View style={{ ...styles.pg, backgroundColor: colors.background }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text style={styles.signUptext}>SIGN UP</Text>
          <Form
            {...{
              authState,
              values,
              handleSubmit,
              errors,
              handleChange,
              handleBlur,
              touched,
              setFieldValue,
            }}
          />
          <View style={styles.lgnContainer}>
            <Text style={styles.txtAlready}>Already have an account? </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={styles.txtLogin}>Login</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.lineContainer}>
            <View style={{ ...styles.line, color: colors.text }} />
            <Text style={styles.txtOr}>or</Text>
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
    registerUser: (data) => dispatch(registerAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  pg: {
    flex: 1,
  },
  signUptext: {
    fontSize: hp("4%"),
    marginTop: hp("7%"),
    color: "#2fb28f",
    alignSelf: "center",
    fontFamily: "Poppins_400Regular",
  },
  txtAlready: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.5%"),
    color: "#9b9ea2",
  },
  txtLogin: {
    fontSize: hp("1.7%"),
    color: "#37bb97",
    paddingHorizontal: 10,
    fontFamily: "Poppins_400Regular",
  },
  lgnContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("1%"),
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
});
