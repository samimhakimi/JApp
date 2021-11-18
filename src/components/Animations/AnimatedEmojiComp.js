import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AnimatedEmoji } from 'react-native-animated-emoji';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AnimatedEmojiComp = () => {
  return (
    <View style={styles.con}>
      <AnimatedEmoji
        index={1}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={1000}
      />
      <AnimatedEmoji
        index={2}
        style={{ bottom: 200 }}
        name={'smile'}
        size={25}
        duration={2000}
      />
      <AnimatedEmoji
        index={3}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={3000}
      />
       <AnimatedEmoji
        index={4}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={4000}
      />
      <AnimatedEmoji
        index={5}
        style={{ bottom: 200 }}
        name={'smile'}
        size={25}
        duration={5000}
      />
      <AnimatedEmoji
        index={6}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={6000}
      />
      <AnimatedEmoji
        index={7}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={7000}
      />
      <AnimatedEmoji
        index={8}
        style={{ bottom: 200 }}
        name={'smile'}
        size={25}
        duration={8000}
      />
      <AnimatedEmoji
        index={9}
        style={{ bottom: 200 }}
        name={'heart'}
        size={25}
        duration={9000}
      />
    </View>
  )
}

export default AnimatedEmojiComp

const styles = StyleSheet.create({
  con: {
    position: "absolute",
    top: hp("60%"),
    left: wp("25%"),
    zIndex: 9999,
    transform: [{ rotate: "90deg" }]
  }
})
