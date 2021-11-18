import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Badge } from 'react-native-paper';

const StreamingLocation = () => {
    return (
        <View style={styles.page}>
            <View style={styles.cont}>
                <Image
                    source={require('../../images/modl3.png')}
                    style={{ width: wp("7.8%"), height: hp("3.5%"), marginHorizontal: wp("3%") }}
                />
                <Text
                    style={styles.txt}
                >San Diego, California</Text>
            </View>
            <Text
                style={styles.txt}
            >I remember you @donbarry when you were very young boy. You have grow a lot. How are your studies now?</Text>

            <View style={styles.con2}>
                <Badge size={8} style={styles.badge} />
                <Badge size={8} style={styles.badge} />
            </View>
            <View style={styles.line} />
        </View>
    )
}

export default StreamingLocation

const styles = StyleSheet.create({
    page: {
        marginVertical: hp("1.8%"),
        marginHorizontal: wp("5%")
    },
    cont: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    txt: {
        fontFamily: "Poppins_400Regular",
        fontSize: hp("2%"),
        color: "#FFF",
        textAlign: "center"
    },
    con2: {
        flexDirection: "row",
        alignSelf: "center",
        marginBottom: hp("0.5%")
    },
    line: {
        borderBottomWidth: 4,
        width: wp("40%"),
        alignSelf: "center",
        borderColor: "#FFF"
    },
    badge: {
        backgroundColor: "#55b8a5",
        marginHorizontal: 1
    }
})
