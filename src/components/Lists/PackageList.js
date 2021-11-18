import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from "@react-navigation/native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PackageList = ({ gr, duration, status }) => {
    const { colors } = useTheme();
    return (
        <View style={{ ...styles.circle, borderColor: gr ? "#2fb28f" : colors.conversationHourText }}>
            <Text style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: gr ? "#2fb28f" : colors.conversationHourText,
            }}>{duration}</Text>
            <Text style={{
                fontFamily: "Poppins_400Regular",
                fontSize: 13,
                color: gr ? "#2fb28f" : colors.conversationHourText,
            }}>{status}</Text>
        </View>
    )
}

export default PackageList

const styles = StyleSheet.create({
    circle: {
        borderRadius: 200,
        borderWidth: 3,
        height: hp("12%"),
        width: hp("12%"),
        alignItems: "center",
        justifyContent: "center"
    }
})
