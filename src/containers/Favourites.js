import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import PostedImageMedium from "../components/Cards/PostedImageMedium";
import UsersPro from "../components/Cards/UsersPro";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import {
  gestureHandlerRootHOC,
  PanGestureHandler,
  TouchableOpacity,
  TouchableWithoutFeedback,
  State,
} from "react-native-gesture-handler";
import StackCard from "./StackCard";
import { favData } from "../data/favData";
import { sub } from "react-native-reanimated";
import { useTransition } from "react-native-redash";

const { width } = Dimensions.get("window");

const step = 1 / (favData.length - 1);
const Favourites = ({ navigateToPost, navigateToStory }) => {
  const { colors } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const aIndex = useTransition(currentIndex);

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, color: colors.text }}>Favorites</Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1 }}>
          {favData.map(
            ({ index, source }) =>
              currentIndex < index * step + step && (
                <StackCard
                  navigateToPost={navigateToPost}
                  key={index}
                  position={sub(index * step, aIndex)}
                  onSwipe={() => setCurrentIndex((prev) => prev + step)}
                  {...{ index, source, step }}
                />
              )
          )}

          {/* <PostedImageMedium /> */}
        </View>
        <View style={{ flex: 1, marginLeft: wp("3%") }}>
          <View style={styles.row1}>
            {favData.map((item, i) => {
              if (i <= 1) {
                return (
                  <TouchableOpacity onPress={navigateToStory}>
                    <UsersPro key={i} live img={item.source} name={item.name} />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
          <View style={styles.row2}>
            {favData.map((item, i) => {
              if (i > 1) {
                return <UsersPro key={i} img={item.source} name={item.name} />;
              }
            })}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Favourites;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    marginTop: hp("1.2%"),
  },
  pictures: {
    overflow: "hidden",
  },
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3.3%"),
    paddingHorizontal: hp("1.2%"),
  },
  row1: {
    flexDirection: "row",
    marginTop: hp("1%"),
  },
  row2: {
    flexDirection: "row",
    marginTop: hp("1.3%"),
  },
  containerCard: {
    // alignSelf: "center",
    width: wp("40%"),
    paddingTop: wp("1%"),
    // paddingHorizontal: wp("1%"),
    height: hp("10%"),
  },
  imgStyle: {
    // resizeMode: "contain",
    borderRadius: 25,
    width: wp("40%"),

    height: hp("22%"),
  },
});
