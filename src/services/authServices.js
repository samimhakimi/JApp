import axios from "axios";
import { baseUrl } from "./baseUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";
class authServices {
  post = async (url, data) => {
    const config = {
      method: "post",
      url: baseUrl + url,
      data: data,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios(config);
    return response;
  };
  getAccessToken = async () => {
    try {
      const token = await AsyncStorage.getItem("@accessToken");
      console.log("getAccesstoken", token);
      const tokenObj = JSON.parse(token);
      return tokenObj;
    } catch (err) {
      console.log("No Token Yet", err);
    }
  };
  saveAccessToken = async (token) => {
    const accessToken = JSON.stringify(token);
    try {
      await AsyncStorage.setItem("@accessToken", accessToken);
    } catch (error) {
      console.log("Token not Added");
    }
  };
  removeAccessToken = async () => {
    try {
      await AsyncStorage.removeItem("@accessToken");
    } catch (error) {
      console.log("Token not removed");
    }
  };
  logoutUser = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.log("Token not cleared");
    }
  };
}

export default authServices;
