import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Platform,
} from "react-native";

import { Camera } from "expo-camera";
import * as ImagePicker from "expo-image-picker";

import { useTheme } from "react-native-paper";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialIcons";

import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

//import ImagePicker from "react-native-image-crop-picker";

const EditProfile = () => {
  const [image, setImage] = useState(
    "https://resume-image-upload.s3.amazonaws.com/upload/photos/2020/09/M4IQEPBrz4b5B6jh8aQE_17_ee95beda971fda3f3da16e7946e6d0cb_avatar.png?cache=0"
  );
  const { colors } = useTheme();

  const [hasPermission, setHasPermission] = useState(null);
  const [useCamera, setUseCamera] = useState(false);
  const cameraRef = useRef(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePicture = async () => {
    if (cameraRef) {
      console.log("in take picture");
      try {
        let photo = await cameraRef.current.takePictureAsync({
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
        return photo;
      } catch (e) {
        console.log(e);
      }
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      return result;
    }
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity
        style={[styles.panelButton]}
        onPress={async () => {
          console.log("in pick camera");
          setUseCamera(true);
        }}
      >
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.panelButton]}
        onPress={async () => {
          console.log("in pick photo");
          const r = await pickImage();
          if (!r.cancelled) {
            setImage(r.uri);
          }
          console.log("response", JSON.stringify(r));
        }}
      >
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <>
      {useCamera ? (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} type={type} ref={cameraRef}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setUseCamera(false);
                }}
              >
                <Text style={styles.text}>
                  <Icon2
                    name="cancel"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <Text style={styles.text}>
                  <Icon2
                    name="flip-camera-ios"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button]}
                onPress={async () => {
                  console.log("in take pic");
                  const r = await takePicture();
                  setUseCamera(true);
                  if (!r.cancelled) {
                    setImage(r.uri);
                  }
                  console.log("response", JSON.stringify(r));
                }}
              >
                <Icon2
                  name="add-a-photo"
                  size={35}
                  color="#fff"
                  style={{
                    opacity: 0.7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: "#fff",
                    borderRadius: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      ) : (
        <View style={styles.container}>
          <BottomSheet
            ref={bs}
            snapPoints={[330, 0]}
            renderContent={renderInner}
            renderHeader={renderHeader}
            initialSnap={1}
            callbackNode={fall}
            enabledGestureInteraction={true}
          />
          <Animated.View
            style={{
              margin: 20,
              opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
            }}
          >
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 15,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <ImageBackground
                    source={{
                      uri: image,
                    }}
                    style={{ height: 100, width: 100 }}
                    imageStyle={{ borderRadius: 15 }}
                  >
                    <View
                      style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Icon
                        name="camera"
                        size={35}
                        color="#fff"
                        style={{
                          opacity: 0.7,
                          alignItems: "center",
                          justifyContent: "center",
                          borderWidth: 1,
                          borderColor: "#fff",
                          borderRadius: 10,
                        }}
                      />
                    </View>
                  </ImageBackground>
                </View>
              </TouchableOpacity>
              <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
                Samim Hakimi
              </Text>
            </View>

            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder="First Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="user" color={colors.text} size={20} />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <Feather name="user" color={colors.text} size={20} />
              <TextInput
                placeholder="Username"
                placeholderTextColor="#666666"
                autoCorrect={true}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View>
            <View style={styles.action}>
              <FontAwesome name="envelope-o" color={colors.text} size={20} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#666666"
                keyboardType="email-address"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View>

            <View style={styles.action}>
              <Icon name="information" color={colors.text} size={20} />
              <TextInput
                placeholder="About"
                placeholderTextColor="#666666"
                autoCorrect={false}
                style={[
                  styles.textInput,
                  {
                    color: colors.text,
                  },
                ]}
              />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
              <Text style={styles.panelButtonTitle}>Submit</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? "14%" : "15%",
  },
  cameraContainer: {
    flex: 1,
    marginTop: 20,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#787b80",
    alignItems: "center",
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#787b80",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  camera: {
    height: 300,
  },
  buttonContainer: {
    flexDirection: "row",
    minWidth: "100%",
    flex: 1,
    marginBottom: -920,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    margin: 8,
  },
  text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
