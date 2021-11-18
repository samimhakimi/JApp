import { Feather as FIcon } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Button, useDisclose } from "native-base";
import React, { useEffect, useState } from "react";
import { Image, Platform, StyleSheet, View } from "react-native";
import { Avatar, List, useTheme } from "react-native-paper";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import BottomSheet from "./BottomSheet";
const PostTab = ({ navigation }) => {
  const { colors } = useTheme();
  const [screen, setScreen] = useState("");
  const [galleryImage, setGalleryImage] = useState("");
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const handleButtonClick = async (name) => {
    if (name === "camera") {
      setScreen("camera");
      navigation.navigate("Camera");
    } else if (name === "gallery") {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        setGalleryImage(result);
      }
      setScreen("gallery");
    }
  };

  return (
    <View style={{ zIndex: -1, height: hp("100%") }}>
      <LinearGradient
        colors={["#2fb28f", "#2fb28f", colors.background]}
        style={styles.headerBackGrad}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <View>
          <List.Item
            title={"Sarah Rose"}
            description={"@sarahrose"}
            titleStyle={styles.title}
            descriptionStyle={styles.description}
            left={(props) => (
              <Avatar.Image
                style={styles.avatar}
                size={wp("13.2%")}
                source={require("../../../images/4.png")}
              />
            )}
          />
        </View>
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button onPress={onOpen}>
            <FIcon name="plus" />
          </Button>
        </View>
      </View>
      <View style={{ flex: 1, height: "100%", width: "100%" }}>
        {galleryImage !== "" ? (
          <View style={{ width: "100%", height: "100%" }}>
            <Image
              style={{ width: "100%", height: hp("30%") }}
              source={{ uri: galleryImage?.uri }}
            />
          </View>
        ) : null}
      </View>
      <BottomSheet
        handleButtonClick={handleButtonClick}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </View>
  );
};

export default PostTab;

const styles = StyleSheet.create({
  title: {
    color: "#000",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  description: {
    color: "#000",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
    marginTop: -3,
  },
  avatar: {
    marginLeft: -wp("2.8"),
    backgroundColor: "transparent",
  },
  proCont: {
    borderWidth: 2,
    borderRadius: 40,
    width: wp("40%"),
    height: hp("7%"),
    padding: 0,
    marginHorizontal: wp("5%"),
    marginTop: hp("5%"),
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  inputContainer: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("2.5%"),
  },
  inputField: {
    paddingHorizontal: wp("5%"),
    flexDirection: "row",
    alignItems: "center",
    // marginTop: hp("2.5%"),
  },
  input: {
    //fontFamily: "Poppins_400Regular",
    fontSize: hp("2%"),
    flex: 1,
    //fontWeight: 'bold',
  },
  spc: {
    marginHorizontal: wp("1%"),
  },
  pickerTitle: {
    fontSize: hp("1%"),
    fontFamily: "Poppins_400Regular",
  },
  picker: {
    width: wp("25%"),
    height: hp("2.8%"),
  },
  item: {
    fontSize: hp("1%"),
    fontFamily: "Poppins_400Regular",
  },
  modalContainer: {
    marginTop: Platform.OS === "ios" ? hp("40%") : hp("0%"),
    height: hp("45%"),
  },
  rowCont: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: wp("8%"),
    marginTop: hp("1.4%"),
    justifyContent: "space-between",
  },

  modalTxt: {
    fontFamily: "Poppins_500Medium",
    fontSize: hp("1.5%"),
    marginTop: hp("0.3%"),
  },
  rw: {
    alignItems: "center",
  },
  grad: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    left: 0,
    right: 0,
    top: hp("8%"),
    height: hp("40%"),
    width: "100%",
    borderColor: "#f2f2f2",
  },
  mdlStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
  },
  handleStyle: {
    marginTop: hp("11%"),
    marginRight: wp("6%"),
    backgroundColor: "#888888",
    bottom: 0,
  },
  headerBackGrad: {
    left: 0,
    right: 0,
    top: 0,
    marginTop: -hp("16%"),
    zIndex: -1,
    height: hp("16%"),
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("2%"),
  },
});
