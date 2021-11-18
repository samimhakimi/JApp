import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const EditingOption = ({ name, active, img }) => {
    const { colors } = useTheme();
    return (
        <View style={styles.page}>
            <TouchableOpacity style={styles.container}>
                <Image source={img} />
            </TouchableOpacity>
            <Text style={{
                ...styles.name,
                color: active ? colors.text : "#bfbfbf"
            }}>{name}</Text>
        </View>
    )
}

export default EditingOption

const styles = StyleSheet.create({
    page: {
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "#FFF",
        marginHorizontal: wp("2.5%"),
        padding: hp("1.8%"),
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 6,
        },
        shadowOpacity: 0.16,
        elevation: 2,
    },
    name: {
        marginVertical: 10,
        fontFamily: "Poppins_600SemiBold",
        fontSize: 10,
        letterSpacing: 3,
    }
})
