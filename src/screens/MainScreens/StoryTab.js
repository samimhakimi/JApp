import React, { useState } from "react";
import { Image, StyleSheet, Modal, Text, Animated, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { List, Avatar, useTheme } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Modalize } from "react-native-modalize";
import { LinearGradient } from "expo-linear-gradient";
import MenuDrawer from "react-native-side-drawer";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import StoryDrawer from "../../components/Drawers/StoryDrawer";
import PhotoEdit from "../../components/Modals/PhotoEdit";

const renderFloatingComponent = () => {
  const { colors } = useTheme();

  return (
    <View style={{ zIndex: -1 }}>
      <LinearGradient
        colors={[colors.sep, colors.gradStart, "#1f9777"]}
        style={styles.botGrad}
      />
      <View style={styles.modalContent}>
        <TouchableOpacity style={{ marginTop: hp("3.5%") }}>
          <Image source={require("../../images/spark.png")} style={styles.sp} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../../images/cam.png")} style={styles.cam} />
          <View style={styles.camBord} />
        </TouchableOpacity>
        <View>
          <TouchableOpacity>
            <Image
              source={require("../../images/modal1.png")}
              style={styles.gal}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: hp("1.2%") }}>
            <Image
              source={require("../../images/camrot.png")}
              style={styles.rot}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const StoryTab = () => {
  const [open, setOpen] = useState(false);
  const { colors } = useTheme();
  const DrawerContent = () => {
    return <StoryDrawer onPress={() => setOpen(false)} />;
  };

  return (
    <View style={{ zIndex: -1 }}>
      <LinearGradient
        colors={[
          "#2fb28f",
          colors.gradBetween,
          colors.gradBetween,
          colors.gradBetween,
          colors.gradBetween,
          colors.gradEnd,
        ]}
        style={styles.bacgroundGradient}
      />
      <View style={{ ...styles.proCont, backgroundColor: colors.sto }}>
        <List.Item
          title={"Sarah Rose"}
          description={"@sarahrose"}
          titleStyle={styles.title}
          descriptionStyle={styles.description}
          left={(props) => (
            <Avatar.Image
              style={styles.avatar}
              size={wp("13.2%")}
              source={require("../../images/4.png")}
            />
          )}
        />
      </View>

      <View style={styles.container}>
        <MenuDrawer
          open={open}
          drawerContent={<DrawerContent />}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={() => setOpen(true)} style={styles.body}>
            <Icon
              name="arrow-right"
              size={hp("3%")}
              color="#20c297"
              style={styles.arrowFront}
            />
          </TouchableOpacity>
        </MenuDrawer>
      </View>

      <View style={styles.modalContainer}>
        <Modalize
          FloatingComponent={renderFloatingComponent}
          overlayStyle={{ backgroundColor: "transparent" }}
          modalStyle={styles.mdlStyle}
          alwaysOpen={Platform.OS === "ios" ? 220 : 150}
          scrollViewProps={{ showsVerticalScrollIndicator: false }}
          handleStyle={styles.handleStyle}
          modalHeight={hp("37%")}
        >
          <LinearGradient
            colors={[colors.sep, colors.sep]}
            style={styles.grad}
          />
          <PhotoEdit />
          <View style={{ height: hp("10%") }} />
        </Modalize>
      </View>
    </View>
  );
};

export default StoryTab;

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
  },
  pickerContainer: {
    borderWidth: 2,
    borderRadius: 50,
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
    marginTop: hp("10%"),
    height: hp("38%"),
  },
  handleStyle: {
    marginTop: hp("2%"),
    marginRight: wp("3%"),
    backgroundColor: "#888888",
  },
  grad: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: hp("40%"),
  },
  bacgroundGradient: {
    left: 0,
    right: 0,
    top: 0,
    height: hp("100%"),
    position: "absolute",
    marginTop: -hp("16%"),
    marginBottom: hp("16%"),
    zIndex: -1,
  },
  modalContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: hp("2%"),
    zIndex: 9999,
    position: "absolute",
    bottom: 40,
    width: wp("100%"),
    zIndex: -3,
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
  arrowFront: {
    marginTop: hp("11%"),
    marginRight: wp("22%"),
  },
  container: {
    height: hp("22%"),
    width: wp("30%"),
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("3%"),
    zIndex: 0,
    marginTop: hp("7%"),
  },
  animatedBox: {
    height: hp("23%"),
    width: wp("40%"),
    backgroundColor: "#38C8EC",
    padding: hp("1%"),
  },
  body: {
    width: wp("40%"),
    height: hp("23%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  camBord: {
    borderBottomWidth: 6,
    borderColor: "#FFF",
    top: 3,
  },
  sp: {
    width: wp("4%"),
    height: hp("2.5%"),
  },
  cam: {
    width: wp("40"),
    height: hp("9%"),
  },
  gal: {
    width: wp("7%"),
    height: hp("2.5%"),
  },
  rot: {
    width: wp("7%"),
    height: hp("2.5%"),
  },
  botGrad: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    bottom: 0,
    height: hp("17.5%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
});
