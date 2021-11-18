import Icon from "@expo/vector-icons/SimpleLineIcons";
import { useTheme } from "@react-navigation/native";
import React, { useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CustomTab from "../../../components/Tabs/CustomTab";
import LiveTab from "../LiveTab";
import StoryTab from "../StoryTab";
import PostTab from "./PostTab";

const CreatePost = (props) => {
  const { colors } = useTheme();
  const [post, setPost] = useState(true);
  const [story, setStory] = useState(false);
  const [live, setLive] = useState(false);

  const onPostPress = () => {
    setPost(true);
    setStory(false);
    setLive(false);
  };
  const onStoryPress = () => {
    setPost(false);
    setStory(true);
    setLive(false);
  };
  const onLivePress = () => {
    setPost(false);
    setStory(false);
    setLive(true);
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#2fb28f" />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="arrow-left"
            size={hp("3%")}
            color={colors.text}
            style={styles.arrowBack}
          />
        </TouchableOpacity>

        <CustomTab
          post={post}
          story={story}
          live={live}
          onLivePress={onLivePress}
          onPostPress={onPostPress}
          onStoryPress={onStoryPress}
        />
      </View>

      {post ? (
        <PostTab navigation={props.navigation} />
      ) : live ? (
        <LiveTab
          onLivePress={() => props.navigation.navigate("LiveStreaming")}
        />
      ) : (
        <StoryTab />
      )}
    </View>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  arrowBack: {
    paddingLeft: wp("5%"),
    // paddingRight: wp("15%"),
    marginBottom: 25,
  },
  container: {
    backgroundColor: "transparent",
    height: hp("16%"),
    flexDirection: "row",
    alignItems: "center",
    paddingTop: hp("2%"),
  },
});
