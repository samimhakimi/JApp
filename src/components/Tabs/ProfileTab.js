import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import Grad from "../ImagePlaceHolders/Grad";

const FirstRoute = () => (
  <View style={styles.tab1}>
    <Grad h={hp("27.5")} w={wp("39%")} />
    <View>
      <Grad h={hp("13%")} w={wp("39%")} />
      <Grad h={hp("13%")} w={wp("39%")} />
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={styles.tab1}>
    <Grad h={hp("27.5")} w={wp("39%")} />
    <View>
      <Grad h={hp("13%")} w={wp("39%")} />
      <Grad h={hp("13%")} w={wp("39%")} />
    </View>
  </View>
);

const ThirdRoute = () => <View />;
const FourthRoute = () => <View />;
const ProfileTab = () => {
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    { key: "first", title: "About" },
    { key: "second", title: "Posts" },
    { key: "third", title: "Videos" },
    { key: "fourth", title: "Stories" },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      renderLabel={({ route }) => (
        <Text
          style={{
            fontFamily: "Poppins_700Bold",
            color: colors.text,
          }}
        >
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
    fourth: FourthRoute,
  });
  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

export default ProfileTab;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: "#2fb28f",
    marginLeft: wp("4%"),
    alignSelf: "center",
    width: wp("14%"),
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
    marginTop: hp("2.5%"),
    borderColor: "#2fb28f",
    flex: 1,
    alignSelf: "center",
    width: wp("90%"),
  },
  tab1: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 3,
    justifyContent: "center",
  },
});
