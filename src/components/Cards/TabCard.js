import React from "react";
import { StyleSheet, TouchableOpacity, Dimensions, Text, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import InteractedUsers from "../Lists/InteractedUsers";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "@expo/vector-icons/Ionicons";

const liked = [
  {
    name: "Den John",
    username: "@denjhon",
    avatar: require("../../images/01.png"),
    followed: false,
  },
  {
    name: "Lara Gustin",
    username: "@laragustin",
    avatar: require("../../images/05.png"),
    followed: true,
  },
  {
    name: "Sunny Michael",
    username: "@sunnymichael",
    avatar: require("../../images/02.png"),
    followed: false,
  },
  {
    name: "Arham Justin",
    username: "@arhamjustin",
    avatar: require("../../images/04.png"),
    followed: true,
  },
  {
    name: "Paul Christan",
    username: "@paulchirstan",
    avatar: require("../../images/03.png"),
    followed: true,
  },
];

const FirstRoute = () => (
  <ScrollView showsVerticalScrollIndicator={false}>
    {liked.map((item) => (
      <InteractedUsers
        key={item.name}
        img={item.avatar}
        name={item.name}
        username={item.username}
        followed={item.followed}
      />
    ))}
  </ScrollView>
);

const SecondRoute = () => <View />;

const ThirdRoute = () => <View />;

const initialLayout = { width: Dimensions.get("window").width };

const TabCard = ({ onPress }) => {
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "Liked" },
    { key: "second", title: "Seen" },
    { key: "third", title: "Shared" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route }) => (
        <Text style={{ fontFamily: "Poppins_700Bold", color: colors.text }}>
          {route.title}
        </Text>
      )}
      indicatorStyle={styles.indicatorStyle}
      style={{ ...styles.tab, backgroundColor: colors.background }}
    />
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  return (
    <View style={{ ...styles.container, backgroundColor: colors.background }}>
      <TouchableOpacity onPress={onPress}>
        <Icon name="ios-close" size={30} style={{ marginTop: -hp("1.2%") }} color="#2fb28f" />
      </TouchableOpacity>
      <View style={{ marginTop: -hp("1.2%") }}>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default TabCard;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: "#2fb28f",
    marginLeft: wp("7%"),
    marginBottom: hp("1%"),
    width: wp("12%"),
    height: hp("0.5%"),
    borderRadius: 5,
  },
  tab: {
    elevation: 0,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  container: {
    marginTop: -hp("6%"),
    borderWidth: 1.5,
    borderRadius: hp("5%"),
    padding: hp("2.5%"),
    borderColor: "#2fb28f",
    flex: 1,
    alignSelf: "center",
    width: wp("88%"),
    marginBottom: hp("1.2%")
  },
});
