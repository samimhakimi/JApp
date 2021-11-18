import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  Image,
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useTheme } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { NotificationData } from "../../data/notificationsData";

const { width: wWidth, height: wHeight } = Dimensions.get("window");

const Header = () => {
  return (
    <View style={styles.headersContainer}>
      <Text style={styles.headerTitle}>Notifications</Text>
    </View>
  );
};
const Notification = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const colors = useTheme();
  if (isEmpty) {
    return (
      <SafeAreaView>
        <View style={{ flex: 1 }}>
          <Header />
          <View style={styles.emptyContainer}>
            <Icon name="bell" size={100} color={"#9dd5c6"} />
          </View>
        </View>
      </SafeAreaView>
    );
  }

  const _renderItem = ({ item }) => {
    return (
      <View
        style={{
          height: wHeight * 0.1,
        }}
      >
        <View
          style={{
            width: wWidth - 40,
            marginHorizontal: 20,
            height: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: "grey",
          }}
        >
          <Image style={{ height: 40, width: 40 }} source={item.source} />
          <View>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
          <View
            style={{ backgroundColor: "#f1d756", padding: 5, borderRadius: 6 }}
          >
            <Text style={{ color: "#caae56" }}>New</Text>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
        <FlatList
          data={NotificationData}
          keyExtractor={({ id }) => id}
          renderItem={_renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: wHeight * 0.9,
  },
  container: {
    flex: 1,
  },
  headersContainer: {
    height: 100,
    // marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9dd5c6",
  },
  headerTitle: {
    color: "#ffff",
    fontSize: 20,
    marginTop: 40,
    fontWeight: "bold",
  },
});
export default Notification;
