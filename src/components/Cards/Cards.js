import React from "react";
import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  add,
  Extrapolate,
  interpolate,
} from "react-native-reanimated";
import {
  mixColor,
  mix,
  usePanGestureHandler,
  // withSpring,
} from "react-native-redash";
import { useSpring } from "./Animations";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const width = wWidth / 2.4;
const height = wWidth / 2.2;
const borderRadius = 24;
const Cards = ({ position, imageUrl, onSwipe, step }) => {
  const backgroundColor = mixColor(position, "#C9E9E7", "#74bcb8");
  const translateYOffset = mix(position, 0, -50);
  const scale = mix(position, 1, 0.9);
  const imageScale = interpolate(position, {
    inputRange: [0, step],
    outputRange: [1.2, 1],
    extrapolate: Extrapolate.CLAMP,
  });
  const {
    gestureHandler,
    translation,
    velocity,
    state,
  } = usePanGestureHandler();
  const translateX = useSpring({
    value: translation.y,
    velocity: velocity.y,
    state,
    snapPoints: [-width, 0, width],
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
    <View style={{ flex: 1 }}>
      <PanGestureHandler {...gestureHandler}>
        <Animated.View
          style={{
            backgroundColor,
            width,
            height,
            borderRadius,
            overflow: "hidden",
            transform: [{ translateY }, { translateX }, { scale }],
          }}
        >
          <Animated.Image
            style={{
              ...StyleSheet.absoluteFillObject,
              width: undefined,
              height: undefined,
              borderRadius,
              transform: [{ scale: imageScale }],
            }}
            source={imageUrl}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Cards;
