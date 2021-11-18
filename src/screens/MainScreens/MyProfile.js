import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Menu } from "react-native-paper";
import MenuButton from "../../components/Buttons/MenuButton";
import InteractionStatus from "../../components/Cards/InteractionStatus";
import ProfileDescription from "../../components/Lists/ProfileDescription";
import ProfileTab from "../../components/Tabs/ProfileTab";

const interactions = [
  {
    id: 1,
    title: "Following",
    number: 38,
  },
  {
    id: 2,
    title: "Followers",
    number: 293,
  },
  {
    id: 3,
    title: "Posts",
    number: 76,
  },
];

const MyProfile = (props) => {
  const navigateToEdit = () => {
    props.navigation.navigate("EditProfile");
  };
  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="transparent" />
      <ProfileDescription
        navigateToEdit={navigateToEdit}
        onBackPress={() => props.navigation.goBack()}
      />
      <View style={styles.cardContainer}>
        {interactions.map((item) => (
          <InteractionStatus
            key={item.id}
            title={item.title}
            number={item.number}
          />
        ))}
      </View>
      <ProfileTab />
      <MenuButton />
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
