import React, { useState } from "react";
import {
  Dimensions,
  Text,
  ImageRequireSource,
  View,
  StyleSheet,
} from "react-native";
import {
  PanGestureHandler,
  RectButton,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import { mix, mixColor, usePanGestureHandler } from "react-native-redash";

import { useSpring } from "./useSpring";

const { width: wWidth } = Dimensions.get("window");
const width = wWidth * 0.45;
const height = wWidth * 0.45;
const borderRadius = 10;
const StackCard = ({ navigateToPost, position, onSwipe, source, step }) => {
  const backgroundColor = mixColor(position, "#C9E9E7", "#74BCB8");
  const translateYOffset = mix(position, 0, -10);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const { gestureHandler, translation, velocity, state } =
    usePanGestureHandler();
  // const translateX = withSpring();
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
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        ...StyleSheet.absoluteFill,
      }}
    >
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
            backgroundColor,
            width,
            height,
            borderRadius,
            overflow: "hidden",
          }}
        >
          <Animated.Image
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              transform: [{ scale: imageScale }],
            }}
            {...{ source }}
          />
          {/* <View
            style={{
              position: "absolute",
              bottom: 0,
              top: 0,
              left: 0,
              right: 0,
              // backgroundColor: "green",
            }}
          >
            <TouchableWithoutFeedback onPress={() => navigateToPost()}>
              <View style={{ height: "100%", width: "100%" }}></View>
            </TouchableWithoutFeedback>
          </View> */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default StackCard;
