import React, { useState } from "react";
import {
  Image,
  Text,
  Modal,
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { List, Badge, Avatar } from "react-native-paper";
import { Modalize } from "react-native-modalize";
import LiveComments from "../../components/Lists/LiveComments";
import LiveCommentInput from "../../components/Input/LiveCommentInput";
import StreamingModal from "../../components/Modals/StreamingModal";
import AnimatedEmojiComp from '../../components/Animations/AnimatedEmojiComp'
import MenuDrawer from "react-native-side-drawer";
import LiveStreamingDrawer from "../../components/Drawers/LiveStreamingDrawer";
import StreamingCreate from "../../components/Modals/StreamingCreate";
import StreamingLocation from "../../components/Modals/StreamingLocation";
import { StatusBar } from "expo-status-bar";

const LiveStreaming = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [endModal, setEndModal] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const toggleOpen = () => {
    setDrawerOpen(!drawerOpen);
  };
  const onTextPress = () => {
    setShowComment(true);
    setShowLocation(false);
  }
  const onLocationPress = () => {
    setShowLocation(true);
    setShowComment(false);
  }
  const drawerContent = () => {
    return <LiveStreamingDrawer
      onLocationPress={onLocationPress}
      onTextPress={onTextPress}
      onPress={toggleOpen} />;
  };

  return (
    <ImageBackground
      source={require("../../images/lv.png")}
      style={styles.page}
    >
      <StatusBar backgroundColor="transparent" />
      <TouchableOpacity onPress={() => {setEndModal(!endModal) }} style={styles.back1}>
        <Icon name="arrow-left" size={hp("3%")} color="#FFF" />
      </TouchableOpacity>

      <View style={styles.con1}>
        <TouchableOpacity >
          <Icon name="arrow-left" size={hp("2%")} color="#2ac4c1" />
        </TouchableOpacity>

        <View style={styles.proCont}>
          <Avatar.Image
            style={styles.avatar}
            size={wp("13.2%")}
            source={require("../../images/4.png")}
          />
          <View style={styles.con2}>
            <Text style={styles.title}>Sarah Rose</Text>
            <Text style={styles.description}>@sarahrose</Text>
          </View>

          <View style={styles.con3}>
            <View style={styles.con4}>
              <View style={styles.con5} />
              <Text style={styles.textLive}>LIVE</Text>
            </View>
            <Text style={styles.time}>01:23:45</Text>
          </View>
        </View>
        <View style={styles.con6}>
          <Image
            source={require("../../images/cpl.png")}
            style={styles.imgppl}
          />
          <Text style={styles.num}>425</Text>
        </View>
      </View>


      <View style={styles.container}>
        <MenuDrawer
          open={drawerOpen}
          drawerContent={drawerContent()}
          drawerPercentage={45}
          animationTime={250}
          overlay={true}
          opacity={0.4}
        >
          <TouchableOpacity onPress={toggleOpen} style={styles.body}>
            <Icon
              name="arrow-right"
              size={hp("3%")}
              color="#2ac4c1"
              style={styles.arrowFront}
            />
          </TouchableOpacity>
        </MenuDrawer>
      </View>
      {
        showLocation === true ? (
          <Modalize
            overlayStyle={{ backgroundColor: "transparent" }}
            modalStyle={styles.mdlStyl}
            alwaysOpen={Platform.OS === "ios" ? hp("15%") : hp("18%")}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}
            handleStyle={styles.handleStyle}
            modalHeight={Platform.OS === "ios" ? hp("15%") : hp("18%")}
          >
            <StreamingLocation />
          </Modalize>
        ) : (
            showComment === true ? (
              <>
                <AnimatedEmojiComp />
                <Modalize
                  overlayStyle={{ backgroundColor: "transparent" }}
                  modalStyle={styles.mdlStyl}
                  alwaysOpen={Platform.OS === "ios" ? hp("30%") : hp("33%")}
                  scrollViewProps={{ showsVerticalScrollIndicator: false }}
                  handleStyle={styles.handleStyle}
                  modalHeight={Platform.OS === "ios" ? hp("30%") : hp("33%")}
                >
                  <View style={styles.con7}>
                    <LiveComments
                      img={require("../../images/3.png")}
                      name="Thomas Storm"
                      comment="Wow Beautiful...❤️" />
                    <LiveComments
                      img={require("../../images/3.png")}
                      name="Martin  Yaqo"
                      comment="LOOKING Awesome..❤️" />

                  </View>
                  <LiveCommentInput
                    onPress={() => {
                      setModalVisible(true);
                    }}
                  />
                </Modalize>
                <Modal animationType="slide" transparent={true} visible={modalVisible}>
                  <StreamingModal
                    onPress={() => {
                      setModalVisible(false);
                    }}
                  />
                </Modal>
              </>
            ) : (
                <StreamingCreate />
              )
          )
      }
      <Modal
        animationType="slide"
        transparent={true}
        visible={endModal}
      >
        <StreamingModal
          onClose={() => { setEndModal(!endModal) }}
        />
      </Modal>
    </ImageBackground>
  );
};

export default LiveStreaming;

const styles = StyleSheet.create({
  proCont: {
    borderRadius: 40,
    width: wp("55%"),
    height: hp("7%"),
    padding: 0,
    marginHorizontal: wp("5%"),
    marginTop: hp("1.8%"),
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
  },
  title: {
    color: "#FFF",
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  description: {
    color: "#FFF",
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
    marginTop: -3,
  },
  avatar: {
    marginLeft: -wp("2.8"),
    backgroundColor: "transparent",
  },
  handleStyle: {
    marginTop: hp("2%"),
    marginRight: wp("3%"),
    backgroundColor: "#888888",
  },
  page: {
    height: "100%",
    width: "100%",
  },
  back1: {
    marginTop: hp("5%"),
    marginHorizontal: wp("7"),
  },
  con1: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: wp("7"),
  },
  con2: {
    justifyContent: "center",
    paddingHorizontal: wp("4%"),
  },
  con3: {
    justifyContent: "center",
  },
  con4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  con5: {
    backgroundColor: "#25f8bd",
    height: hp("1.2%"),
    width: wp("2.5%"),
    borderRadius: 5,
    marginHorizontal: wp("1%"),
  },
  textLive: {
    fontSize: hp("1.2%"),
    fontFamily: "Poppins_500Medium",
    color: "#FFF",
  },
  time: {
    fontSize: hp("1.2%"),
    fontFamily: "Poppins_400Regular",
    color: "#FFF",
  },
  con6: {
    alignItems: "center",
    marginTop: hp("4%"),
    marginHorizontal: wp("8%"),
  },
  imgppl: {
    height: hp("2.5%"),
    width: wp("8%"),
  },
  num: {
    color: "#FFF",
    fontFamily: "Poppins_500Medium",
    fontSize: hp("1.2%"),
  },
  mdlStyl: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "transparent",
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  con7: {
    paddingHorizontal: wp("5%"),
    paddingTop: hp("1%"),
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
  body: {
    width: wp("40%"),
    height: hp("23%"),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  arrowFront: {
    marginTop: hp("11%"),
    marginRight: wp("22%"),
  },
});
