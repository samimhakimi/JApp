import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Modal, View } from "react-native";
import { connect } from "react-redux";
import AppCamera from "../components/AppCamera";
import MenuButton from "../components/Buttons/MenuButton";
import MessageModal from "../components/Modals/MessageModal";
import { authConstants } from "../redux/constants/authConstants";
import ForgotPassword from "../screens/AuthScreens/ForgotPassword";
import Login from "../screens/AuthScreens/Login";
import ResetPassword from "../screens/AuthScreens/ResetPassword";
import SignUp from "../screens/AuthScreens/SignUp";
import Chatting from "../screens/MainScreens/Chatting";
import EditProfile from "../screens/MainScreens/EditProfile";
import Home from "../screens/MainScreens/Home";
import LiveStreaming from "../screens/MainScreens/LiveStreaming";
import MainMessage from "../screens/MainScreens/MainMessage";
import MyProfile from "../screens/MainScreens/MyProfile";
import Notification from "../screens/MainScreens/Notification";
import PhotoEdit from "../screens/MainScreens/PhotoEdit";
import PicEdit from "../screens/MainScreens/PicEdit";
import Post from "../screens/MainScreens/Post";
import CreatePost from "../screens/MainScreens/PostScreen/CreatePost";
import Promotion from "../screens/MainScreens/Promotion";
import SendMessage from "../screens/MainScreens/SendMessage";
import SetTimer from "../screens/MainScreens/SetTimer";
import Setting from "../screens/MainScreens/Setting";
import StoryView from "../screens/MainScreens/StoryView";
import authServices from "../services/authServices";
import { store } from "../stores/store";
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
export const isReadyRef = React.createRef();
export const navigationRef = React.createRef();
const AppNavigator = (props) => {
  const [signedIn, setSignedIn] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSplash, setIsSplash] = useState(true);

  const handleModelNavigation = (value) => {
    if (value === "CreatePost") {
      setModalVisible(false);
      navigationRef.current.navigate("CreatePost");
    } else if (value === "SendMessage") {
      setModalVisible(!modalVisible);
      navigationRef.current.navigate("SendMessage");
    } else if (value === "MyProfile") {
      setModalVisible(!modalVisible);
      navigationRef.current.navigate("MyProfile");
    } else if (value === "Setting") {
      setModalVisible(!modalVisible);
      navigationRef.current.navigate("Setting");
    }
  };

  // useEffect(() => {
  //   let timeOut = setTimeout(() => {
  //     setIsSplash(false);
  //   }, 3000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, []);

  // if (isSplash) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <Text>Jozeko Mobile App</Text>
  //     </View>
  //   );
  // }

  const { isAuthenticated } = props.auth;

  useEffect(() => {
    getToken();
  }, []);
  const getToken = async () => {
    const _auth = new authServices();
    const tokenObj = await _auth.getAccessToken();

    if (tokenObj) {
      store.dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: tokenObj,
      });
    } else {
      store.dispatch({
        type: authConstants.LOGIN_FAILURE,
      });
    }
  };
  console.log("store", store.getState());
  return (
    <View style={{ flex: 1 }}>
      {isAuthenticated && modalVisible ? (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <MessageModal
            onClose={() => setModalVisible(false)}
            handleModelNavigation={handleModelNavigation}
          />
        </Modal>
      ) : null}
      <Stack.Navigator
        initialRouteName="CreatePost"
        screenOptions={screenOptionStyle}
      >
        {isAuthenticated ? (
          <React.Fragment>
            {/* must be modified later using mobx */}
            {/* <Stack.Screen name="Login" component={Login} /> */}
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="EditProfile" component={EditProfile} />

            <Stack.Screen name="LiveStreaming" component={LiveStreaming} />

            <Stack.Screen name="Camera" component={AppCamera} />
            <Stack.Screen name="PicEdit" component={PicEdit} />
            <Stack.Screen name="StoryView" component={StoryView} />
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="PhotoEdit" component={PhotoEdit} />
            <Stack.Screen name="CreatePost" component={CreatePost} />
            <Stack.Screen name="SetTimer" component={SetTimer} />
            <Stack.Screen name="Setting" component={Setting} />
            <Stack.Screen name="Promotion" component={Promotion} />
            <Stack.Screen name="Post" component={Post} />
            <Stack.Screen name="MainMessage" component={MainMessage} />
            <Stack.Screen name="SendMessage" component={SendMessage} />
            <Stack.Screen name="Chatting" component={Chatting} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </React.Fragment>
        ) : (
          <>
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Login" component={Login} />
          </>
        )}
      </Stack.Navigator>
      {isAuthenticated ? (
        <MenuButton onPress={() => setModalVisible(!modalVisible)} />
      ) : null}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export default connect(mapStateToProps, {})(AppNavigator);
