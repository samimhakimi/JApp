import React from 'react'
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import Icon from "@expo/vector-icons/SimpleLineIcons";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";

const Trim = () => {
    const { colors } = useTheme();
    return (
        <View>
            <View style={styles.hrContainer}>
                <Text style={{ ...styles.hr, color: colors.text }}>0:00</Text>
                <Text style={{ ...styles.hr, color: colors.text }}>0:45:00</Text>
                <Text style={{ ...styles.hr, color: colors.text }}>2:00:00</Text>
            </View>
            <View style={styles.proContainer}>
                <TouchableOpacity>
                    <Icon
                        name="arrow-left"
                        size={hp("3%")}
                        color={colors.text}
                        style={styles.arrowBack}
                    />
                </TouchableOpacity>
                <ImageBackground source={require('../../images/imgg.png')} style={styles.back}>
                    <Image source={require('../../images/line.png')} style={styles.line} />
                </ImageBackground>

                <TouchableOpacity>
                    <Icon
                        name="arrow-right"
                        size={hp("3%")}
                        color={colors.text}
                        style={styles.arrowBack}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Trim

const styles = StyleSheet.create({
    hr: {
        fontFamily: "Poppins_700Bold",
        fontSize: hp('1.5%')
    },
    hrContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        width: wp("65%"),
        alignSelf: 'center',
        marginVertical: hp('0.2%')
    },
    proContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    back: {
        width: wp('50%'),
        height: hp('5%'),
        alignItems: "center"
    },
    line: {
        width: wp('0.5%'),
        height: hp('5%'),
    }
})
