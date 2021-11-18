import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import { Modalize } from "react-native-modalize";
import ImageEnhance from "../../components/Modals/ImageEnhance";
import Trim from "../../components/ImagePlaceHolders/Trim";
import { useTheme } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Shaders, Node, GLSL } from "gl-react";
import { Surface } from "gl-react-expo";
import colorScales from "../../components/colorScales";
import { useState } from "react";
import ImageFilters, {
  Constants,
  Presets,
} from "react-native-gl-image-filters";

import Colorify from "./PhotoEditComponent/Colorify";
const { width: wWidth, height: wHeight } = Dimensions.get("window");
const interpolation = "linear";

const align = false;
const trim = true;

const PhotoEdit = (props) => {
  // const { interpolation, color } = this.props;
  const { colors } = useTheme();

  const route = props.route.params;
  const [colorIndex, setColorIndex] = useState(0);
  const [head, setHead] = useState("");

  const handleColorIndex = (value) => {
    setColorIndex(value);
  };
  const [imageStatus, setImageStatus] = useState({
    hue: Constants.DefaultValues.hue,
    blur: Constants.DefaultValues.blur,
    sepia: Constants.DefaultValues.sepia,
    sharpen: Constants.DefaultValues.sharpen,
    negative: Constants.DefaultValues.negative,
    contrast: Constants.DefaultValues.contrast,
    saturation: Constants.DefaultValues.saturation,
    brightness: Constants.DefaultValues.brightness,
  });
  const align = false;
  const trim = true;
  const color = Object.keys(colorScales)[colorIndex];

  const presetColor = [
    Presets.NoPreset,
    Presets.AmaroPreset,
    Presets.ClarendonPreset,
    Presets.DogpatchPreset,
    Presets.GinghamPreset,
    Presets.GinzaPreset,
    Presets.HefePreset,
    Presets.LudwigPreset,
    Presets.SkylinePreset,
    Presets.SlumberPreset,
    Presets.SierraPreset,
    Presets.StinsonPreset,
  ];
  const handleChange = (name, value) => {
    if (name === "HUE") {
      setImageStatus({
        hue: value,
      });
      setHead("HUE");
    } else if (name === "BLUR") {
      setImageStatus({
        blur: value,
      });
      setHead("BLUR");
    } else if (name === "SEPIA") {
      setImageStatus({
        sepia: value,
      });
      setHead("SEPIA");
    } else if (name === "SHARPEN") {
      setImageStatus({
        sharpen: value,
      });
      setHead("SHARPEN");
    } else if (name === "NEGATIVE") {
      setImageStatus({
        negative: value,
      });
      setHead("NEGATIVE");
    } else if (name === "CONTRAST") {
      setImageStatus({
        contrast: value,
      });
      setHead("CONTRAST");
    } else if (name === "SATURATION") {
      setImageStatus({
        saturation: value,
      });
      setHead("SATURATION");
    } else if (name === "BRIGHTNESS") {
      setImageStatus({
        sharpen: value,
      });
      setHead("BRIGHTNESS");
    } else {
      setHead("BRIGHTNESS");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      {route.imageUrl ? (
        <Surface style={{ width: wWidth, height: wHeight }}>
          <ImageFilters
            // brightness={imageStatus.brightness}
            {...imageStatus}
            width={wWidth}
            height={wHeight}
            {...presetColor[colorIndex]}
          >
            {route.imageUrl}
          </ImageFilters>
        </Surface>
      ) : (
        <>
          <LinearGradient
            colors={["#2fb28f", "#2fb28f", colors.background]}
            style={styles.headerBackGrad}
          />
          <View style={styles.headerCo}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                name="arrow-left"
                size={hp("3%")}
                color={colors.text}
                style={styles.arrowBack}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="check" size={hp("3.8%")} color={colors.text} />
            </TouchableOpacity>
          </View>
          {align ? (
            <Text style={{ ...styles.tit, color: colors.text }}>Align</Text>
          ) : trim ? (
            <Text style={{ ...styles.tit, color: colors.text }}>Trim</Text>
          ) : (
            <Text style={{ ...styles.tit, color: colors.text }}>Contrast</Text>
          )}
          <Surface
            style={{
              ...styles.imgBack,
              width: align ? wp("60%") : wp("100%"),
              height: trim ? hp("33%") : hp("40%"),
            }}
          >
            <Colorify
              url={require("../../images/ed.png")}
              colorScale={colorScales[color]}
              interpolation={interpolation}
            />
          </Surface>

          {trim ? <Trim /> : null}
          {align ? (
            <Image
              source={require("../../images/mask.png")}
              style={styles.mask}
            />
          ) : null}
          <View
            style={{ ...styles.rw, marginTop: align ? hp("1.2%") : hp("2.4%") }}
          >
            <Image
              source={require("../../images/ed1.png")}
              style={styles.ed1}
            />
            <Image
              source={require("../../images/ed2.png")}
              style={styles.ed2}
            />
            <Image
              source={require("../../images/ed3.png")}
              style={styles.ed3}
            />
            <Image
              source={require("../../images/ed4.png")}
              style={styles.ed4}
            />
          </View>
        </>
      )}
      {/* // Bottom Modal */}
      <Modalize
        overlayStyle={{ backgroundColor: "transparent" }}
        modalStyle={styles.mdlStyle}
        alwaysOpen={Platform.OS === "ios" ? hp("32%") : hp("30%")}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        handleStyle={styles.handleStyle}
        modalHeight={Platform.OS === "ios" ? hp("32%") : hp("30%")}
      >
        <LinearGradient
          colors={[colors.gradStart, "#1f9777"]}
          style={styles.botGrad}
        />
        <View style={styles.modCont}>
          <ImageEnhance
            handleColorIndex={handleColorIndex}
            head={head}
            handleChange={handleChange}
            imageUrl={route.imageUrl}
          />
        </View>
      </Modalize>
    </View>
  );
};
// PhotoEdit.defaultProps = {
//   interpolation: "linear",
//   color: Object.keys(colorScales)[0],
// };
export default PhotoEdit;

const styles = StyleSheet.create({
  headerBackGrad: {
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    zIndex: -1,
    height: hp("20%"),
  },
  botGrad: {
    position: "absolute",
    bottom: 0,
    zIndex: -9999,
    width: "100%",
    height: Platform.OS === "ios" ? hp("33.5%") : hp("35.5%"),
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  mdlStyle: {
    backgroundColor: "transparent",
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
  },
  arrowFront: {
    marginTop: hp("11%"),
    marginRight: wp("22%"),
  },
  handleStyle: {
    marginTop: hp("2.5%"),
    marginRight: wp("3%"),
    backgroundColor: "#888888",
  },
  modCont: {
    flex: 1,
  },
  headerCo: {
    flexDirection: "row",
    paddingHorizontal: wp("5%"),
    position: "absolute",
    width: "100%",
    marginTop: hp("5.5%"),
    zIndex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  chk: {
    width: wp("7%"),
    height: hp("2.5%"),
  },
  tit: {
    marginTop: hp("10%"),
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("3%"),
    alignSelf: "center",
  },
  imgBack: {
    alignSelf: "center",
    marginTop: hp("6.5%"),
    justifyContent: "center",
  },
  pl: {
    height: hp("10.5%"),
    width: wp("20%"),
    alignSelf: "center",
  },
  mask: {
    alignSelf: "center",
    zIndex: 9999,
    width: wp("66%"),
    height: hp("45%"),
    marginTop: -hp("42.5%"),
  },
  rw: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: wp("80%"),
    alignSelf: "center",
  },
  ed1: {
    width: wp("5.5%"),
    height: hp("3%"),
  },
  ed2: {
    width: wp("6%"),
    height: hp("3%"),
  },
  ed3: {
    width: wp("3.2%"),
    height: hp("3.5%"),
  },
  ed4: {
    width: wp("6%"),
    height: hp("3%"),
  },
});
