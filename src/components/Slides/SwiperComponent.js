import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash";
import Swiper from "react-native-swiper";
import Interaction from "../CardComponents/Interaction";
import PostedImage from "../Cards/PostedImage";
import UserList from "../Lists/UserList";

const images = [
  {
    index: 2,
    source: require("../../images/com1.png"),
  },
  {
    index: 1,
    source: require("../../images/post.png"),
  },
];

const SwiperComponent = () => {
  return (
    <Swiper style={StyleSheet.wrapper} dotColor="#abd5eb" activeDotColor="#FFF">
      <View style={styles.slide}>
        <View
          style={{
            marginTop: 50,
            width: 300,
            height: 300,
            borderRadius: 25,
          }}
        >
          <ImageBackground
            style={{ width: 300, height: 300, borderRadius: 50 }}
            source={require("../../images/post.png")}
          >
            <View
              style={{
                position: "relative",
                top: 10,
                marginLeft: 10,
                zIndex: 80,
              }}
            >
              <UserList />
            </View>

            <View style={{ position: "absolute", bottom: 20, marginLeft: 23 }}>
              <Interaction />
            </View>
          </ImageBackground>
        </View>
      </View>
    </Swiper>
  );
};
const styles = StyleSheet.create({
  wrapper: {},
  slide: {
    flex: 1,
    alignItems: "center",
  },
});
export default SwiperComponent;
