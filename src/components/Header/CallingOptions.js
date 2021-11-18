import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const CallingOptions = () => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon
          name="phone"
          size={24}
          color={colors.text}
          style={{ paddingHorizontal: 10 }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="camrecorder" size={24} color={colors.text} />
      </TouchableOpacity>
    </View>
  );
};

export default CallingOptions;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  }
});
