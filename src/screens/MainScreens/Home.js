import React, { useEffect, useState } from "react";
import { StyleSheet, Text, Modal, View, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import PostedImage from "../../components/Cards/PostedImage";
import Favourites from "../../containers/Favourites";
import Following from "../../containers/Following";
import { SafeAreaView } from "react-native-safe-area-context";
import MenuButton from "../../components/Buttons/MenuButton";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MessageModal from "../../components/Modals/MessageModal";
import { useTheme } from "@react-navigation/native";
import HomeHelper from "./HomeHelper";


import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";




const Home = (props) => {
  const { colors } = useTheme();

  const navigateToNotification = () => {
    props.navigation.navigate("Notification");
  };
  const navigateToChangeProfilePic = () => {
    props.navigation.navigate("EditProfile");
  };

  const navigateToStory = () => {
    console.log("Click to got to Story");
    props.navigation.navigate("StoryView");
  };
  const navigateToPost = () => {
    console.log("FunctionTriggered");
    props.navigation.navigate("Post");
  };
  const [userData, setUserData] = useState([]); 
  const [posts, setPosts] = useState([]);
  const [imagess, setImages] = useState([]);

 

  const getUserData = async () => {
 
      const token = await AsyncStorage.getItem('idToken')
       axios.defaults.headers.common["Authorization"] = token;
    
     let one =
     "https://jozeko.herokuapp.com/getUserdata";
let two =
  "https://jozeko.herokuapp.com/fetchusercollections/posts";

const requestOne = axios.get(one);
const requestTwo = axios.get(two); 

axios
  .all([requestOne, requestTwo])
  .then(
    axios.spread((...responses) => {
     
      const responseOne = responses[0].data;
      const responseTwo = responses[1].data;
    

      setUserData(responseOne);
      console.log(responseTwo);
      console.log("Consoooooole");
 
for (var i of responseTwo) {
  let images = {}; 
    images.image = i.data.image_url;
    images.desc = i.data.PostText;
    images.id = i.id;
    imagess.push(images);
}
      setPosts(responseTwo);
      console.log(imagess)
    })
    
  )
  .catch(errors => {
    // react on errors.
    console.error(errors);
  });
    
  };

  useEffect(() => {
    getUserData();
  }, []);


  
  return (
    <SafeAreaView style={{ ...styles.page, color: colors.background }}>
      <StatusBar backgroundColor={colors.background} />
      <View style={{ backgroundColor: colors.background }}>
        <View style={styles.container}>
          <Header
            userData = {userData}
            navigateToNotification={navigateToNotification}
            onBubblePress={() => props.navigation.navigate("MainMessage")}
            navigateToChangeProfilePic = {navigateToChangeProfilePic}
          />
          <Favourites
            navigateToStory={navigateToStory}
            navigateToPost={navigateToPost}
          />
          <Following navigateToStory={navigateToStory} />
          <TouchableOpacity>
          <View style={{margin: 20}}>
          <HomeHelper
            data = {posts}
            images = {imagess}
            props = {props}
          />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp("8%"),
  },
  page: {
    flex: 1,
  },
});
