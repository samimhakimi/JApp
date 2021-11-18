import React, { useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";
// import Slider from "react-native-slider";
import Slider from "@react-native-community/slider";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EditingOption from "../Cards/EditingOption";
import EditingSettings from "./EditingSettings";
import { State, TouchableOpacity } from "react-native";
import { useReducer } from "react";
import { ScrollView } from "react-native-gesture-handler";

const initialState = {
  brightness: false,

  shadow: false,
  contrast: false,
  title: "FILTERS",
};

function reducer(state, action) {
  switch (action.type) {
    case "@type/BRIGHTNESS":
      return {
        ...state,
        brightness: true,
        shadow: false,
        contrast: false,
        title: "BRIGHTNESS",
      };

    case "@type/SHADOW":
      return {
        ...state,
        brightness: false,
        shadow: true,
        contrast: false,
        title: "SHADOW",
      };
    case "@type/CONTRAST":
      return {
        ...state,
        brightness: false,
        shadow: false,
        title: "CONTRAST",
        contrast: true,
      };
  }
}

const FilterOptions = [
  {
    id: 1,
    name: "JUGRAM",
    src: require("../../images/edit1.png"),
  },
  {
    id: 2,
    name: "ELK",
    src: require("../../images/edit2.png"),
  },
  {
    id: 3,
    name: "SATURN",
    src: require("../../images/edit3.png"),
  },
  {
    id: 4,
    name: "MARIA",
    src: require("../../images/edit4.png"),
  },
  {
    id: 5,
    name: "BROOM",
    src: require("../../images/edit2.png"),
  },
  {
    id: 6,
    name: "BROOM",
    src: require("../../images/edit3.png"),
  },
  {
    id: 7,
    name: "BROOM",
    src: require("../../images/edit1.png"),
  },
  {
    id: 8,
    name: "BROOM",
    src: require("../../images/edit2.png"),
  },
  {
    id: 9,
    name: "BROOM",
    src: require("../../images/edit3.png"),
  },
  {
    id: 10,
    name: "BROOM",
    src: require("../../images/edit3.png"),
  },
];
const settings = [
  {
    name: "BRIGHTNESS",
    minValue: 0,
    maxValue: 5,
    source: require("../../images/e3.png"),
  },
  {
    name: "BLUR",
    minValue: 0,
    maxValue: 30,
    source: require("../../images/e4.png"),
  },
  {
    name: "SEPIA",
    minValue: -5,
    maxValue: 5,
    source: require("../../images/e1.png"),
  },
  {
    name: "SHARPEN",
    minValue: 0,
    maxValue: 15,
    source: require("../../images/e5.png"),
  },
  {
    name: "NEGATIVE",
    minValue: -2.0,
    maxValue: 2.0,
    source: require("../../images/e2.png"),
  },
  {
    name: "CONTRAST",
    minValue: -10.0,
    maxValue: 10.0,
    source: require("../../images/e6.png"),
  },
  {
    name: "SATURATION",
    minValue: 0.0,
    maxValue: 2,
    source: require("../../images/e8.png"),
  },
  {
    name: "HUE",
    minValue: 0,
    maxValue: 6.3,
    source: require("../../images/e7.png"),
  },
  // {
  //   name: "temperature",
  //   minValue: 0.0,
  //   maxValue: 40000.0,
  // },
  // {
  //   name: "exposure",
  //   step: 0.05,
  //   minValue: -1.0,
  //   maxValue: 1.0,
  // },
];

const ImageEnhance = ({ handleColorIndex, imageUrl, handleChange, head }) => {
  const [settingsValue, setSettingsValue] = React.useState({
    name: "BRIGHTNESS",
    max: 5,
    min: 0,
  });
  const [title, setTitle] = useState("BRIGHTNESS");
  const handleFilterNameChange = (value, max, min) => {
    setSettingsValue({
      name: value,
      max,
      min,
    });
    setTitle(value);
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        {imageUrl ? (
          <View style={styles.tabContainer}>
            <Text style={{ fontWeight: "bold" }}>{title}</Text>
          </View>
        ) : (
          <Slider
            minimumValue={-10}
            maximumValue={42}
            minimumTrackTintColor="#c3e7ea"
            maximumTrackTintColor="#FFF"
            thumbTintColor="#FFF"
          />
        )}

        <View style={{ height: hp("15%") }}>
          <View style={{ height: hp("12%") }}>
            <ScrollView
              style={{ width: wp("100%") }}
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {FilterOptions.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={() => handleColorIndex(item.id)}
                  >
                    <EditingOption name={item.name} active img={item.src} />
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.sliderContainer}>
            <Slider
              minimumValue={settingsValue.min}
              maximumValue={settingsValue.max}
              minimumTrackTintColor="#c3e7ea"
              maximumTrackTintColor="#FFF"
              thumbTintColor="#FFF"
              onValueChange={(value) => handleChange(settingsValue.name, value)}
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.btmLine} /> */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 30,
        }}
      >
        {/* //24 24 */}
        {settings.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                handleFilterNameChange(item.name, item.maxValue, item.minValue)
              }
              style={{ marginHorizontal: wp("2%") }}
            >
              <Image
                source={item.source}
                style={{
                  width: wp("5%"),
                  height: hp("2.8%"),
                  transform: [
                    {
                      translateY: item.name === title ? -15 : 0,
                    },
                  ],
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.btmLine2} />
    </View>
  );
};

export default ImageEnhance;

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    marginTop: wp("2%"),
    alignSelf: "center",
  },
  btmLine: {
    borderBottomWidth: 4,
    width: wp("26%"),
    borderColor: "#FFF",
    marginTop: 5,
    marginHorizontal: wp("6%"),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btmLine2: {
    borderBottomWidth: 4,
    width: wp("30%"),
    alignSelf: "center",
    borderColor: "#FFF",
    bottom: 10,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: hp("5%"),
  },

  tabText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  sliderContainer: {
    height: hp("1%"),
    width: wp("90%"),
    marginHorizontal: wp("5%"),
    // paddingTop: hp("1%"),
  },
});
