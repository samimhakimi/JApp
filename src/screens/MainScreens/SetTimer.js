import React,{useState} from "react";
import { StyleSheet, Modal, Text, View } from "react-native";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import HeaderContainer from "../../containers/HeaderContainer";
import TimerModal from "../../components/Modals/TimerModal";



const FirstRoute = () => <View />;

const SecondRoute = () => <View />;

const ThirdRoute = () => <View />;

const SetTimer = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const { colors } = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "first", title: "First" },
    { key: "second", title: "Second" },
    { key: "third", title: "Third" },
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
    <View style={{ flex: 1 }}>
      <HeaderContainer />
      <View style={styles.container}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={renderTabBar}
        />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <TimerModal
        //   onPress={() => {
        //     setModalVisible(false);
        //   }}
        />
        
      </Modal>
    </View>
  );
};

export default SetTimer;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: "#2fb28f",
    marginLeft: wp("8%"),
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
    alignItems: "center",
    justifyContent: "center",
  },
});
