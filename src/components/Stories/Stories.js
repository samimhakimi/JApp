import React, { useState } from "react";
import { useRef } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Animated, {
  abs,
  concat,
  cos,
  divide,
  Extrapolate,
  greaterThan,
  multiply,
  sub,
  cond,
} from "react-native-reanimated";

import Story from "./Story";
const { width } = Dimensions.get("window");
const perspective = width;
const angle = Math.atan(perspective / width / 2);
const ratio = Platform.OS === "ios" ? 2 : 1.2;
class Stories extends React.Component {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      x: new Animated.Value(0),
    };
  }
  //TODO: Need to add auto scrolling on scrollview
  getStyle = (index) => {
    const { x } = this.state;
    const offset = width * index;
    const inputRange = [offset - width, offset + width];
    const translateX = x.interpolate({
      inputRange,
      outputRange: [width / ratio, -width / ratio],
      extrapolate: Extrapolate.CLAMP,
    });
    const rotateY = x.interpolate({
      inputRange,
      outputRange: [`${angle}rad`, `-${angle}rad`],
      extrapolate: Extrapolate.CLAMP,
    });

    const alpha = abs(rotateY);
    const gamma = sub(angle, alpha);
    const beta = sub(Math.PI, alpha, gamma);
    const w = sub(
      width / 2,
      multiply(width / 2, divide(Animated.sin(gamma), Animated.sin(beta)))
    );

    const translateX1 = x.interpolate({
      inputRange,
      outputRange: [width / 2, -width / 2],
      extrapolate: Extrapolate.CLAMP,
    });
    const extra = width / ratio / Math.cos(angle / 2) - width / ratio;
    const translateX2 = x.interpolate({
      inputRange,
      outputRange: [-extra, extra],
      extrapolate: Extrapolate.CLAMP,
    });
    return {
      ...StyleSheet.absoluteFillObject,
      transform: [
        { perspective },
        { translateX },
        { rotateY },
        { translateX: translateX1 },
        { translateX: translateX2 },
      ],
    };
  };
  getMaskStyle(index) {
    const { x } = this.state;
    const offset = index * width;
    const inputRange = [offset - width, offset, offset + width];
    const opacity = x.interpolate({
      inputRange,
      outputRange: [0.75, 0, 0.75],
      extrapolate: "clamp",
    });
    return {
      backgroundColor: "black",
      ...StyleSheet.absoluteFillObject,
      opacity,
    };
  }

  render() {
    const { stories } = this.props;
    const { x } = this.state;

    return (
      <View style={styles.container}>
        {stories.map((story, index) => (
          <Animated.View style={this.getStyle(index)} key={story.id}>
            <Story {...{ story }} />
            <Animated.View style={this.getMaskStyle(index)} />
          </Animated.View>
        ))}
        <Animated.ScrollView
          ref={this.scrollRef}
          style={StyleSheet.absoluteFill}
          contentContainerStyle={{ width: width * stories.length }}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={width}
          decelerationRate={0.99}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: { x },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Stories;
