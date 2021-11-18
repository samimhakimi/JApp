import React from "react";
import { StyleSheet, Text, View } from "react-native";
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
import { StatusBar } from "expo-status-bar";
import {useTheme} from "@react-navigation/native";

const messages = [
  {
    image: require("../../images/av5.png"),
    name: "Don Barry",
    voice: true,
    content: "Voice Message",
    duration: "30S AGO",
    active: true,
  },
  {
    image: require("../../images/av5.png"),
    name: "Emma Stone",
    text: true,
    content: "Last Seen Recently",
    duration: "2M AGO",
    active: true,
  },
  {
    image: require("../../images/av5.png"),
    name: "Sarah Rose",
    text: true,
    content: "Story Seen",
    duration: "40M AGO",
    active: true,
  },
  {
    image: require("../../images/av5.png"),
    name: "Thomas James",
    imageMessage: true,
    content: "Shared Post",
    duration: "1D AGO",
    active: false,
  },
  {
    image: require("../../images/av5.png"),
    name: "Jessica Cali",
    text: true,
    content: "Typing...",
    duration: "1S AGO",
    active: true,
  },
  {
    image: require("../../images/av5.png"),
    name: "Martin Yaqo",
    voice: false,
    content: "Voice Message",
    duration: "3D AGO",
    active: false,
  },
];
const MainMessage = (props) => {
  const {colors} = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="transparent"/>
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
          <Icon
            name="new-message"
            size={hp("3%")}
            color={colors.text}
            style={styles.editIcon}
          />
        </View>
      </HeaderContainer>
      <View style={styles.titleCont}>
        <Text style={{...styles.title,color:colors.text}}>Message</Text>
        <Icon
          name="sound-mix"
          size={hp("3%")}
          color={colors.text}
          style={styles.mixIcon}
        />
      </View>
      <ScrollView>
        {messages.map((item) => (
          <MessageList
            img={item.image}
            name={item.name}
            desc={item.content}
            duration={item.duration}
            imageMessage={item.imageMessage}
            voice={item.voice}
            text={item.text}
            active={item.active}
            send={false}
          />
        ))}
      </ScrollView>
      <MenuButton />
    </View>
  );
};

export default MainMessage;

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
  editIcon:{
    paddingLeft:wp("3%"),
  },
  mixIcon:{
    paddingLeft:wp("3%"),
    transform: [{ rotate: "90deg" }] 
  }
});
