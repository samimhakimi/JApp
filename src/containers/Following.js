import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import UsersPro from "../components/Cards/UsersPro";
import { followingData } from "../data/followingData";

const Following = ({ navigateToStory }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, color: colors.text }}>Following</Text>
      <ScrollView
        style={{ paddingHorizontal: 0 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {followingData.map((item, i) => {
          return (
            <TouchableWithoutFeedback onPress={navigateToStory}>
              <UsersPro following key={i} img={item.source} name={item.name} />
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Following;

const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3.3%"),
    paddingHorizontal: hp("1.2%"),
  },
  container: {
    paddingHorizontal: 30,
    paddingBottom: hp("3%"),
  },
});
