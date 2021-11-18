import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import MessageSearch from "../../components/Input/MessageSearch";
import HeaderContainer from "../../containers/HeaderContainer";
import Icon from "@expo/vector-icons/Entypo";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MessageList from "../../components/Lists/MessageList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MenuButton from "../../components/Buttons/MenuButton";
import {useTheme} from "@react-navigation/native";
import { color } from "react-native-reanimated";

const messages = [
  {
    image: require("../../images/m1.png"),
    name: "Don Barry",
    voice: true,
    content: "Voice Message",
    duration: "30S AGO",
    active: true,
  },
  {
    image: require("../../images/m2.png"),
    name: "Emma Stone",
    text: true,
    content: "Last Seen Recently",
    duration: "2M AGO",
    active: true,
  },
  {
    image: require("../../images/m3.png"),
    name: "Sarah Rose",
    text: true,
    content: "Story Seen",
    duration: "40M AGO",
    active: true,
  },
  {
    image: require("../../images/m4.png"),
    name: "Thomas James",
    imageMessage: true,
    content: "Shared Post",
    duration: "1D AGO",
    active: true,
  },
  {
    image: require("../../images/m5.png"),
    name: "Jessica Cali",
    text: true,
    content: "Typing...",
    duration: "1S AGO",
    active: true,
  },
  {
    image: require("../../images/m6.png"),
    name: "Martin Yaqo",
    voice: false,
    content: "Voice Message",
    duration: "3D AGO",
    active: true,
  },
];
const SendMessage = (props) => {
  const {colors} = useTheme();
  return (
    <View style={{flex:1}}>
      <StatusBar backgroundColor="#2fb28f"/>
      <HeaderContainer>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name="chevron-thin-left"
            size={hp("2.6%")}
            color={colors.text}
            style={styles.backIco}
          />
        </TouchableOpacity>

        <View style={styles.row}>
          <MessageSearch />
        </View>
      </HeaderContainer>
      <View style={styles.titleCont}>
        <Text style={{...styles.title,color:colors.text }}>Send a Message</Text>
        <Icon
          name="sound-mix"
          size={hp("3%")}
          color={colors.text}
          style={{ transform: [{ rotate: "90deg" }] }}
        />
      </View>
      <ScrollView>
        {messages.map((item) => (
          <MessageList
            onPress={()=>props.navigation.navigate('Chatting')}
            img={item.image}
            name={item.name}
            desc={item.content}
            duration={item.duration}
            imageMessage={item.imageMessage}
            voice={item.voice}
            text={item.text}
            active={item.active}
            send={true}
          />
        ))}
      </ScrollView>
    <MenuButton/>
    </View>
  );
};

export default SendMessage;

const styles = StyleSheet.create({
  backIco: {
    paddingLeft: wp("8%"),
    paddingRight: wp("5%"),
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleCont: {
    flexDirection: "row",
    paddingHorizontal: wp("6.5%"),
    marginVertical: hp("1.8%"),
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: hp("3.6"),
    fontFamily: "Poppins_700Bold",
  },
});
