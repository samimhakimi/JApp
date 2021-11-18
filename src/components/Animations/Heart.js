import React from "react";
import { View, StyleSheet, Animated } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

class Heart extends React.Component {
  fadeAnimation = new Animated.Value(1);
  mode = new Animated.Value(0);
  buttonSize = new Animated.Value(1);

  animateHeart = () => {
    Animated.sequence([
      Animated.timing(this.buttonSize, {
        toValue: 0.95,
        duration: 200,
        useNativeDriver: false,
      }),
      Animated.timing(this.buttonSize, {
        toValue: 1,
        useNativeDriver: false,
      }),
      Animated.timing(this.mode, {
        toValue: this.mode._value === 0 ? 1 : 0,
        useNativeDriver: false,
      }),
      Animated.spring(this.fadeAnimation, {
        toValue: this.fadeAnimation._value === 0 ? 1 : 0,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  };

  componentDidUpdate() {
    if (true) {
      this.animateHeart();
    }
  }
  handlePress = () => {
    this.props.store.whenLiked();

    // this.setState({ liked: !this.state.liked });
  };

  render() {
    const heart1X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -20],
    });

    const heart1Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -50],
    });

    const heart2X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -24],
    });

    const heart2Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -30],
    });

    const heart3X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -15],
    });

    const heart3Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -60],
    });
    const heart4X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const heart4Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -60],
    });
    const heart5X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const heart5Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -80],
    });
    const heart6X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const heart6Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -70],
    });
    const heart7X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -15],
    });

    const heart7Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -85],
    });
    const heart8X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const heart8Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -100],
    });
    const heart9X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -15],
    });

    const heart9Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -95],
    });
    const heart10X = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 15],
    });

    const heart10Y = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -70],
    });

    const rotation = this.mode.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "45deg"],
    });

    const sizeStyle = {
      transform: [{ scale: this.buttonSize }],
    };

    return (
      <View>
        <Animated.View
          style={[
            {
              opacity: this.fadeAnimation,
            },
          ]}
        >
          <Animated.View
            style={{
              position: "absolute",
              left: heart1X,
              top: heart1Y,
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="heart" size={19} color="red" />
          </Animated.View>
          <Animated.View
            style={{ position: "absolute", left: heart2X, top: heart2Y }}
          >
            <AntDesign name="heart" size={19} color="red" />
          </Animated.View>
          <Animated.View
            style={{ position: "absolute", left: heart3X, top: heart3Y }}
          >
            <AntDesign name="heart" size={19} color="red" />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              left: heart4X,
              top: heart1Y,
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="heart" size={19} color="red" />
          </Animated.View>
          <Animated.View
            style={{ position: "absolute", left: heart5X, top: heart2Y }}
          >
            <AntDesign name="heart" size={15} color="red" />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              left: heart6X,
              top: heart3Y,
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="heart" size={17} color="red" />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              left: heart7X,
              top: heart7Y,
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="heart" size={18} color="red" />
          </Animated.View>
          <Animated.View
            style={{ position: "absolute", left: heart8X, top: heart8Y }}
          >
            <AntDesign name="heart" size={18} color="red" />
          </Animated.View>
          <Animated.View
            style={{ position: "absolute", left: heart9X, top: heart9Y }}
          >
            <AntDesign name="heart" size={15} color="red" />
          </Animated.View>
          <Animated.View
            style={{
              position: "absolute",
              left: heart10X,
              top: heart10Y,
              transform: [{ rotate: rotation }],
            }}
          >
            <AntDesign name="heart" size={15} color="red" />
          </Animated.View>
        </Animated.View>

        <Animated.View style={[styles.button, sizeStyle]}>
          <TouchableOpacity
            onPress={this.handlePress}
            underlayColor="transparent"
          >
            <Animated.View>
              <AntDesign name="heart" size={20} color={true ? "red" : "#FFF"} />
            </Animated.View>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}
export default Heart;

const styles = StyleSheet.create({
  button: {
    marginTop: -1.5,
    marginRight: 10,
  },
});
