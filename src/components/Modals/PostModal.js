import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";
import { BlurView } from "expo-blur";
import PostedImage from "../Cards/PostedImage";
import { LinearGradient } from "expo-linear-gradient";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import TabCard from "../Cards/TabCard";
import { useTheme } from "@react-navigation/native";

const PostModal = ({ onPress }) => {
  const { colors } = useTheme();
  return (
    <BlurView tint={colors.modalBackground} intensity={60} style={[styles.centeredView]}>
      <LinearGradient
        colors={[
          colors.background,
          "#2596c2",
          "#2596c2", "#2596c2",
          "#2596c2",
          "#2596c2",
          "#2596c2",
          "#2596c2",
          colors.background,
        ]}
        style={styles.gradient}
      >
        <PostedImage lg />
      </LinearGradient>
      <TabCard onPress={onPress} />
    </BlurView>
  );
};

export default PostModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  clo: {
    height: 14,
    width: 14,
  },
  gradient: {
    left: 0,
    right: 0,
    top: 0,
    height: hp("60%"),
    padding: wp("3.4%"),
  },
});
