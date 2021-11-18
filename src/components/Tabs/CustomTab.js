import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const CustomTab = ({
  post,
  story,
  live,
  onLivePress,
  onPostPress,
  onStoryPress,
}) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{ borderBottomWidth: post ? 5 : 0, borderColor: "#2fdbad" }}
        onPress={onPostPress}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: post ? hp("3%") : hp("2.5%"),
            fontFamily: post ? "Poppins_700Bold" : "Poppins_600SemiBold",
          }}
        >
          Post
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderBottomWidth: story ? 5 : 0,
          borderColor: "#2fdbad",
          marginHorizontal: wp("6%"),
        }}
        onPress={onStoryPress}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: story ? hp("3%") : hp("2.5%"),
            fontFamily: story ? "Poppins_700Bold" : "Poppins_600SemiBold",
          }}
        >
          Story
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ borderBottomWidth: live ? 5 : 0, borderColor: "#2fdbad" }}
        onPress={onLivePress}
      >
        <Text
          style={{
            color: colors.text,
            fontSize: live ? hp("3%") : hp("2.5%"),
            fontFamily: live ? "Poppins_700Bold" : "Poppins_600SemiBold",
          }}
        >
          Live{" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default CustomTab;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: hp("6%"),
    alignSelf: "center",
    flex: 1,
    zIndex: 9999,
  },
});
