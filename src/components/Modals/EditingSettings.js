import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const EditingSettings = ({ handleFilterNameChange }) => {
  return (
    <View style={styles.row2}>
      {/* //24 24 */}
      {/* {editOptions.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => handleFilterNameChange("brightness")}
            style={{ marginHorizontal: wp("2%") }}
          >
            <Image
              source={item.source}
              style={{
                width: wp("5%"),
                height: hp("2.8%"),
              }}
            />
          </TouchableOpacity>
        );
      })} */}
    </View>
  );
};

export default EditingSettings;

const styles = StyleSheet.create({
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
});
