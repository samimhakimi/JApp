import React, { useState, useEffect } from "react";
import { StyleSheet, Modal, Image, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SwiperComponent from "../../components/Slides/SwiperComponent";
import Comments from "../../components/Lists/Comments";
import CommentField from "../../containers/CommentField";
import PostModal from "../../components/Modals/PostModal";
import { useTheme } from "@react-navigation/native";

import axios from "axios";

const comments = [
  {
    img: require("../../images/av2.png"),
    name: "Sarah Rose",
    desc:
      "#Photoshoot #Smile #Beautiful #Fashion Ella Rose’s photoshoot in San Francisco Last weekend. It was really fun.",
    liked: false,
    numberofLikes: 0,
    duration: "REPLY",
  },
  {
    img: require("../../images/av4.png"),
    name: "Sarah Rose",
    desc:
      "Wow! Just amazing. I love your profile content. Look forward to see more.  Well done!",
    liked: true,
    numberofLikes: 19,
    duration: "1H AGO",
  },
  {
    img: require("../../images/av5.png"),
    name: "Sarah Rose",
    desc: "Lovely photo, Dani. You always amaze  And impress me. Keep it up.",
    liked: true,
    numberofLikes: 15,
    duration: "30S AGO",
  },
];





const Post = (props) => {


  const { colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [postData, setPostData] = useState([]);
  console.log(props.route.params.id);
  console.log("From POST Screen");


  useEffect(() => {
    const getPostData = async () => {
      try {
        const token = await AsyncStorage.getItem('idToken')
  
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.get("https://jozeko.herokuapp.com/getPostData/"+props.route.params.id);
        const data = response.data;
        setPostData(data.PostData)
      } catch(err){
        if (err.response) {
          console.log(err.response.status);
        } else {
          console.error(err);
        }
      };
    };
  
    getPostData();
  }, []);


  return (
    <SafeAreaView
      style={{ ...styles.main, backgroundColor: colors.background }}
    >
      <StatusBar backgroundColor={colors.background} />
      <ScrollView >
        <View style={styles.cont}>
          <LinearGradient
            colors={[
              colors.background,
              "#2596c2",
              "#2596c2",
              "#2596c2",
              "#2596c2",
              "#2596c2",
              "#2596c2",
              "#2596c2",
              colors.background,
            ]}
            style={styles.gradient}
          >
            <View style={styles.headerC}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon name="chevron-left" color={colors.text} size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name="dots-vertical" color={colors.text} size={25} />
              </TouchableOpacity>
            </View>

            <SwiperComponent />
          </LinearGradient>
          {comments.map((item, i) => (
            <Comments
              key={i}
              img={item.img}
              name={item.name}
              desc={item.desc}
              liked={item.liked}
              number={item.numberofLikes}
              duration={item.duration}
            />
          ))}
        </View>
      </ScrollView>
      <CommentField
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <PostModal
          onPress={() => {
            setModalVisible(false);
          }}
        />
      </Modal>
    </SafeAreaView>
  );
};

export default Post;

const styles = StyleSheet.create({
  cont: {
    marginBottom: hp("15%"),
  },
  gradient: {
    left: 0,
    right: 0,
    top: 0,
    height: hp("60%"),
    padding: wp("3.4%"),
  },
  back: {
    width: hp("2.5%"),
    height: hp("2.2%"),
    marginLeft: wp("16%"),
    marginVertical: hp("1.2%"),
  },
  headerC: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: wp("10%"),
    paddingLeft: wp("15%"),
  },
});
