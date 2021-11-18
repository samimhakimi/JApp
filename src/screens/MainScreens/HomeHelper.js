import React, { Component, useState } from "react";
import PostedImage from "../../components/Cards/PostedImage";
import { useTransition } from "react-native-redash";
import { sub } from "react-native-reanimated";
import { View } from "react-native";
import {FlatListSlider} from 'react-native-flatlist-slider';

import Preview from "./Preview";

const images2 = [
  {
    url: "",
    index: 2,
    source: require("../../images/com1.png"),
    props: {},
  },
  {
    url: "",
    index: 1,
    source: require("../../images/post.png"),
    props: {},
  },
];

const images22 = [
  {
   image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
   desc: 'Silent Waters in the mountains in midst of Himilayas',
  },
 {
   image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
   desc:
     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
 },
 {
  image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
  desc:
    'Red fort in India New Delhi is a magnificient masterpeiece of humans',
},
 
 ]


const HomeHelper = ({ onPress, data, images, props }) => {


  return (
    <View > 
  <FlatListSlider
    data={images}
    width={275}
    loop = {false}
    autoscroll={false}
    component={<Preview />}
    //onPress={item => alert(JSON.stringify(item.id))}
    onPress= {(item) => props.navigation.navigate('Post', {
      id: item.id
    })}
    indicatorActiveWidth={40}
    contentContainerStyle={{paddingHorizontal: 16}}
  />

    </View>
  );
};

export default HomeHelper;
