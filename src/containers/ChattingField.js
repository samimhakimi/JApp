import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import CommentInput from "../components/Input/CommentInput";
import MenuButton from "../components/Buttons/MenuButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import ChatInput from "../components/Input/ChatInput";

const ChattingField = ({onPress}) => {
  const { colors } = useTheme();
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <ChatInput/>
      <View style={styles.menuContainer}>
        <MenuButton onPress={onPress} />
      </View>
    </View>
  );
};

export default ChattingField;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
  },
  menuContainer: {
    marginTop: hp("8%"),
  },
});