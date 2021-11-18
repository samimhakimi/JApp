import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Modal,
  Pressable,
  ImageBackground,
  View,
  Dimensions,
} from "react-native";
// import {  } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Interaction from "../CardComponents/Interaction";
import UserList from "../Lists/UserList";
import ImageViewer from "react-native-image-zoom-viewer";
import { PanGestureHandler } from "react-native-gesture-handler";
import {
  mix,
  mixColor,
  useGestureHandler,
  usePanGestureHandler,
} from "react-native-redash";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { useSpring } from "../../containers/useSpring";

// const OpenImageModal = ({ visible, onRequestClose }) => {
//   return (
//     <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
//       <ImageViewer imageUrls={images} />
//       <Pressable
//         style={[styles.button, styles.buttonClose]}
//         onPress={() => this.setModalVisible(!modalVisible)}
//       >
//         <Text style={styles.textStyle}>Hide Modal</Text>
//       </Pressable>
//     </Modal>
//   )
// }

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.9;
const height = wWidth * 0.7;
const borderRadius = 10;
const PostedImage = ({
  visible,
  onClosePress,
  onRequestClose,
  lg,
  onPress,
  onLongPress,
  source,
  position,
  index,
  onSwipe,
  step,
}) => {
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -10);
  const scale = mix(position, 1, 0.9);
  // const imageScale = interpolate(position, {
  //   inputRange: [0, step],
  //   outputRange: [1.2, 1],
  //   extrapolate: Extrapolate.CLAMP,
  // });
  const translateX = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-wWidth, 0, width],
    onSnap: ([x]) => x !== 0 && onSwipe(),
  });
  const translateY = add(
    translateYOffset,
    useSpring({
      value: translation.y,
      velocity: velocity.y,
      state,
      snapPoints: [0],
    })
  );
  return (
    <View style={StyleSheet.absoluteFillObject}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            transform: [
              {
                translateY,
              },
              { translateX },
              { scale },
            ],
            marginHorizontal: 20,
            backgroundColor,
            width,
            height,
            borderRadius,
            overflow: "hidden",
          }}
        >
          <Animated.Image
            source={source}
            style={{
              // transform: [{ scale: imageScale }],
              ...styles.back,
              height: undefined,
              width: undefined,
              ...StyleSheet.absoluteFillObject,
            }}
            imageStyle={{ borderRadius: 25 }}
          />

          <UserList />
          <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
            <View style={styles.touchingArea}></View>
          </TouchableOpacity>
          {lg ? <Interaction large /> : <Interaction />}
          {/* <Modal
        visible={visible}
        onRequestClose={onRequestClose}
        transparent={true}
      >
        <ImageViewer imageUrls={images} />
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onClosePress}
        >
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </Modal> */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default PostedImage;

const styles = StyleSheet.create({
  back: {
    alignSelf: "center",
    // width: wp("80%"),
    // paddingHorizontal: 20,
  },
  touchingArea: {
    height: hp("16.5%"),
    width: wp("100%"),
  },
});
