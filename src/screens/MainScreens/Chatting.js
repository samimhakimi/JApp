import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CallingOptions from "../../components/Header/CallingOptions";
import ActiveUser from "../../components/Lists/ActiveUser";
import HeaderContainer from "../../containers/HeaderContainer";
import Icon from "@expo/vector-icons/SimpleLineIcons";
import ReceivedText from "../../components/ChatComponents.js/ReceivedText";
import SendText from "../../components/ChatComponents.js/SendText";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import SendVoice from "../../components/ChatComponents.js/SendVoice";
import ChattingField from "../../containers/ChattingField";
import { useTheme } from "@react-navigation/native"

const received = [
  {
    content: "Hello how are you ?",
    duration: null,
    reaction: "🙂",
  },
  {
    content:
      "I remember you when you were very young boy. You have grow a lot. How are your studies now?",
    duration: "11:11PM",
    reaction: "😎",
  },
  {
    content:
      "Now, I remember that you were trying to become an engineer, but never told me what kind.",
    duration: "11:11PM",
    reaction: "👍",
  },
];

const sentText = [
  {
    content:
      "Hey, Bella! Thanks for asking. I am doing well and I am studying civil engineering.",
    duration: "11:12PM",
    reaction: "🙂",
    status: "Seen",
  },
  {
    content: "How have you been?",
    duration: "11:12PM",
    reaction: null,
    status: "Delivered",
  },
];

const Chatting = (props) => {
  const { colors } = useTheme();
  return (
    <View style={styles.page}>
      <HeaderContainer>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              name="arrow-left"
              size={hp("3%")}
              color={colors.text}
              style={styles.arrowBack}
            />
          </TouchableOpacity>
          <View style={styles.userCont}>
            <ActiveUser dr />
          </View>
          <CallingOptions />
        </View>
      </HeaderContainer>
      <ScrollView>
        {received.map((item) => (
          <ReceivedText
            key={item.content}
            duration={item.duration}
            content={item.content}
            reaction={item.reaction}
          />
        ))}

        {sentText.map((item) => (
          <SendText
            key={item.content}
            content={item.content}
            duration={item.duration}
            reaction={item.reaction}
            status={item.status}
          />
        ))}
        <SendVoice duration="11:12PM" status="Delivered" />
        <View style={styles.btm} />
      </ScrollView>
      <ChattingField />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  headerContainer: {
    flex: 1,
    paddingHorizontal: wp("6%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  arrowBack: {
    paddingRight: wp("3%"),
  },
  userCont: {
    flex: 1,
  },
  btm: {
    marginBottom: 150,
  },
});
