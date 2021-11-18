import { Feather as FIcon } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Actionsheet, Box } from "native-base";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
const icons = [
  {
    id: 1,
    name: "Gallery",
    key: "gallery",
    icon: <FIcon name="image" size={40} color="#2fb28f" />,
  },
  {
    id: 2,
    name: "Camera",
    key: "camera",
    icon: <FIcon name="camera" size={40} color="#2fb28f" />,
  },
  {
    id: 3,
    name: "Set Schedule",
    key: "set_shedule",
    icon: <FIcon name="clock" size={40} color="#2fb28f" />,
  },
  {
    id: 4,
    name: "Location",
    key: "location",
    icon: <FIcon name="map-pin" size={40} color="#2fb28f" />,
  },
  {
    id: 5,
    name: "Tag Friend",
    key: "tag_friend",
    icon: <FIcon name="tag" size={40} color="#2fb28f" />,
  },
  {
    id: 6,
    name: "Share Post",
    key: "share_post",
    icon: <FIcon name="share" size={40} color="#2fb28f" />,
  },
  {
    id: 7,
    name: "Music",
    key: "music",
    icon: <FIcon name="image" size={40} color="#2fb28f" />,
  },
];

const BottomSheet = ({ handleButtonClick, onClose, isOpen }) => {
  return (
    <View style={styles.modalContainer}>
      <Actionsheet isOpen={isOpen} onClose={onClose} bottom={-5}>
        <Actionsheet.Content borderTopRadius="0">
          <Box padding={0} w="100%" h={400} justifyContent="center">
            <LinearGradient
              style={{ width: "100%", height: "100%" }}
              colors={["#2fb28f", "#1f9777"]}
            >
              <View
                style={{
                  marginTop: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {icons.map((item, i) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleButtonClick(item.key)}
                      key={item.id}
                      style={{
                        alignItems: "center",
                        width: 90,
                        height: 100,
                        margin: 10,
                      }}
                    >
                      {item.icon}
                      <Text style={{ ...styles.modalTxt, color: "#000000" }}>
                        {item.name}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </LinearGradient>
          </Box>
        </Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

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

export default BottomSheet;
