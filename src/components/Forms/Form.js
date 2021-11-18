import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  BackHandler,
  ActivityIndicator,
} from "react-native";
import Input from "../Input/Input";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RectButton, TouchableOpacity } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Feather as FIcon } from "@expo/vector-icons";
import moment from "moment";
const Form = ({
  values,
  handleSubmit,
  errors,
  handleChange,
  handleBlur,
  setFieldValue,
  authState,
}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    const formatDate = moment(currentDate).format("DD/MM/YYYY");
    setFieldValue("dob", formatDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <>
      <View style={styles.container}>
        <Input
          value={values.fname}
          handleChange="fname"
          name="fname"
          icon="user"
          errors={errors.fname}
          placeholder="First Name"
          onChangeText={handleChange("fname")}
        />
        <Input
          icon="user"
          errors={errors.lname}
          name="lname"
          value={values.lname}
          placeholder="Last Name"
          onChangeText={handleChange("lname")}
        />
        <Input
          name="username"
          errors={errors.username}
          value={values.username}
          icon="user"
          placeholder="Username"
          onChangeText={handleChange("username")}
        />
        <Input
          icon="mail"
          errors={errors.email}
          placeholder="Email Address"
          name="email"
          value={values.email}
          onChangeText={handleChange("email")}
        />

        <RectButton onPress={showDatepicker}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              borderBottomColor: "#2FB28F",
              borderBottomWidth: 2,
              paddingVertical: 2,
            }}
          >
            <FIcon name="calendar" size={20} color={"#939393"} />
            <Text style={{ marginHorizontal: 10, color: "#939393" }}>
              {values.dob ? values.dob : "00/00/0000"}
            </Text>
          </View>
        </RectButton>
        {/* <Input
          onKeyPress={() => showDatepicker()}
          icon="calendar"
          errors={errors.dob}
          name="dob"
          value={values.dob}
          placeholder="00/00/0000"
          onChangeText={handleChange("dob")}
        /> */}
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Input
          icon="lock"
          errors={errors.password}
          placeholder="Password"
          secured
          name="password"
          value={values.password}
          onChangeText={handleChange("password")}
        />
      </View>
      <TouchableOpacity onPress={() => handleSubmit()} style={styles.btn}>
        {authState.isAuthenticating ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.btnText}> SIGN UP</Text>
        )}
      </TouchableOpacity>
    </>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    width: wp("80%"),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#2fb28f",
    marginTop: hp("2%"),
    alignSelf: "center",
    paddingHorizontal: 30,
    paddingBottom: hp("7%"),
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
});
