import React from "react";
import { StyleSheet, Text, Image, View, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import {useTheme} from "@react-navigation/native"

const StreamingCreate = () => {
    const {colors} = useTheme();
    return (
        <>
            <LinearGradient
                 colors={[colors.gradStart, "#1f9777"]}
                style={styles.botGrad}
            />
            <View style={styles.modalContent}>
                <TouchableOpacity style={{ marginTop: hp("3.5%") }}>
                    <Image source={require("../../images/spark.png")} style={styles.sp} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require("../../images/rec.png")} style={styles.cam} />
                    <View style={styles.camBord} />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: hp("3.2%") }}>
                    <Image source={require("../../images/camrot.png")} style={styles.rot} />
                </TouchableOpacity>

            </View>
        </>
    )
}

export default StreamingCreate

const styles = StyleSheet.create({
    botGrad: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: hp("10.5%"),
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    modalContent: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: hp("2%"),
        zIndex: 9999,
        position: "absolute",
        bottom: 8,
        width: wp("100%"),
    },
    sp: {
        width: wp("4%"),
        height: hp("2.5%"),
    },
    cam: {
        width: wp("40"),
        height: hp("9%"),
    },
    rot: {
        width: wp("7%"),
        height: hp("2.5%"),
    },
})
