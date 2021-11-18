import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Slider from 'react-native-slider'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import EditingOption from '../Cards/EditingOption';

const MoreEditingOptions = () => {
    return (
        <>
            <View style={styles.container}>
                <Slider
                    minimumValue={-10}
                    maximumValue={42}
                    minimumTrackTintColor='#20c297'
                    maximumTrackTintColor='#FFF'
                    thumbTintColor='#FFF'
                />
                <View style={styles.row}>
                    <EditingOption name="JUGRAM" active img={require('../../images/edit1.png')} />
                    <EditingOption name="ELK" img={require('../../images/edit2.png')} />
                    <EditingOption name="SATURN" img={require('../../images/edit3.png')} />
                    <EditingOption name="MARIA" img={require('../../images/edit4.png')} />
                    <EditingOption name="BROOM" img={require('../../images/edit5.png')} />

                </View>
            </View>
            <View style={styles.btmLine} />
        </>
    )
}

export default MoreEditingOptions

const styles = StyleSheet.create({
    container: {
        width: wp("80%"),
        marginTop: wp("2%"),
        alignSelf: "center"
    },
    btmLine: {
        borderBottomWidth: 4,
        width: wp("26%"),
        borderColor: "#FFF",
        marginTop: 5,
        marginHorizontal: wp("6%")
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    }
})

