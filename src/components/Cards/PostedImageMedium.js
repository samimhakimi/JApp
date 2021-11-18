import React from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import InteractionMedium from "../CardComponents/InteractionMedium";
import UserListMedium from "../Lists/UserListMedium";
import DeckAnimation from "../Animations/DeckAnimation";

const DATA = [
  {
    id: 1,
    src: require("../../images/post.png"),
  },
  {
    id: 2,
    src: require("../../images/guy.png"),
  },
  {
    id: 3,
    src: require("../../images/ed.png"),
  },
  {
    id: 4,
    src: require("../../images/postmd.png"),
  },
];

class PostedImageMedium extends React.Component {
  renderCard(item) {
    return (
      <ImageBackground
        key={item.id}
        source={item.src}
        style={styles.container}
        imageStyle={styles.imgStyle}
      >
        <UserListMedium />
        <InteractionMedium />
      </ImageBackground>
    );
  }

  renderNoMoreCards() {
    return (
      <View title="All Done!">
        <Text style={styles.noCard}>No more Post!</Text>
        {/* <Button backgroundColor="#03A9F4" title="Get more!" /> */}
      </View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DeckAnimation
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

export default PostedImageMedium;

const styles = StyleSheet.create({
  container: {
    // alignSelf: "center",
    width: wp("40%"),
    paddingHorizontal: wp("1%"),
    height: hp("20%"),
  },
  imgStyle: {
    // resizeMode: "contain",
    borderRadius: 25,
  },
});
