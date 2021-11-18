import React from "react";
import {
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BlurView } from "expo-blur";
import { List, Avatar } from "react-native-paper";
import SearchSetting from "../Input/SearchSetting";
import Icon from "@expo/vector-icons/AntDesign";
import { connect } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

const MessageModal = ({ onClose, handleModelNavigation, logout }) => {
  const users = [
    { id: 1, name: "Philip Nolley" },
    { id: 2, name: "Hellen Orris" },
    { id: 3, name: "Evan Robarge" },
    { id: 4, name: "Orval Infantino" },
    { id: 5, name: "Iliana Peri" },
    { id: 6, name: "Tran Sparacino" },
    { id: 7, name: "Glayds Fosdick" },
    { id: 8, name: "Selene Getz" },
    { id: 9, name: "Rosaura Mcdonell" },
    { id: 10, name: "Joesph Narducci" },
    { id: 11, name: "Doreatha Crumpler" },
    { id: 12, name: "Iona Santucci" },
    { id: 13, name: "Larissa Mayo" },
    { id: 14, name: "Harlan Riddick" },
    { id: 15, name: "Randy Lacour" },
    { id: 16, name: "Silvana Lemen" },
    { id: 17, name: "Harold Dolezal" },
    { id: 18, name: "Ilda Kottwitz" },
    { id: 19, name: "Brenton Daw" },
    { id: 20, name: "Pearle Bullington" },
  ];

  const { colors } = useTheme();
  const [text, onChangeText] = React.useState("");
  const [filtered, setFiltered] = React.useState([]);

  

  const searchFilterFunction = (text) => {
    const newData = users.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setFiltered(newData);
  };

  console.log(filtered);

  return (
    <BlurView
      tint={colors.modalBackground}
      intensity={100}
      style={[styles.centeredView]}
    >
      <View style={{ ...styles.modalView, backgroundColor: colors.background }}>
        <TouchableOpacity style={styles.clsContainer} onPress={onClose}>
          <Image
            source={require("../../images/mclose.png")}
            style={styles.close}
          />
        </TouchableOpacity>
        <SearchSetting
          text={text}
          onChangeText={(text) => {
            onChangeText(text), searchFilterFunction(text);
          }}
          autoCorrect={false}
        />
        {text.length > 0 && filtered.length <= 0 && (
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: hp("2%"),
              paddingTop: 10,
              paddingHorizontal: wp("2.5%"),
            }}
          >
            No user named {text}
          </Text>
        )}

        {text.length > 0 ? ( 
          <ScrollView  showsVerticalScrollIndicator={false}>
            {filtered.map((item, index) => (
                <View  >
              <List.Item
                title={item.name}
                description={"Traveller, life lover"}
                titleStyle={{ ...styles.title, color: colors.text }}
                descriptionStyle={{
                  ...styles.description,
                  color: colors.text,
                }}
                
                left={(props) => (
                  <Avatar.Image
                    style={{
                      alignSelf: "center",
                      backgroundColor: colors.background,
                    }}
                    size={wp("13%")}
                    source={require("../../images/av2.png")}
                  />
                  
                )}
                
              />
               <TouchableOpacity
                style={{ ...styles.container, backgroundColor: colors.text }}
              >
                <Text style={{ ...styles.txt, color: colors.background }}>
                  View Profile
                </Text>
              </TouchableOpacity>
              </View>
              
            ))}
            
          </ScrollView>
       
        ) : (
          <>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: wp("4%"),
              }}
            >
              {/* <View style={{ flex: 1 }}>
                <List.Item
                  title={"Don Barry"}
                  description={"Traveller, life lover"}
                  titleStyle={{ ...styles.title, color: colors.text }}
                  descriptionStyle={{
                    ...styles.description,
                    color: colors.text,
                  }}
                  left={(props) => (
                    <Avatar.Image
                      style={{
                        alignSelf: "center",
                        backgroundColor: colors.background,
                      }}
                      size={wp("13%")}
                      source={require("../../images/av2.png")}
                    />
                  )}
                />
              </View> */}
      
            </View>

            <View
              style={{
                // alignSelf: "center",
                // justifyContent: "center",
                paddingHorizontal: wp("3%"),
              }}
            >
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleModelNavigation("CreatePost")}
              >
                <Image
                  source={require("../../images/add.png")}
                  style={styles.img}
                />
                <Text style={{ ...styles.modalText, color: colors.text }}>
                  Create
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleModelNavigation("SendMessage")}
              >
                <Image
                  source={require("../../images/msg.png")}
                  style={styles.img}
                />
                <Text style={{ ...styles.modalText, color: colors.text }}>
                  Send a Message
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleModelNavigation("MyProfile")}
              >
                <Image
                  source={require("../../images/prfl.png")}
                  style={styles.img}
                />
                <Text style={{ ...styles.modalText, color: colors.text }}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.row}
                onPress={() => handleModelNavigation("Setting")}
              >
                <Image
                  source={require("../../images/gr.png")}
                  style={styles.img}
                />
                <Text style={{ ...styles.modalText, color: colors.text }}>
                  Settings
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-end",
                justifyContent: "space-between",
                paddingHorizontal: wp("5%"),
                flexGrow: 1,
              }}
            >
              <TouchableOpacity onPress={() => {}}>
                <View
                  style={{
                    flexDirection: "row",
                    // alignItems:"center",
                    // justifyContent:"center"
                  }}
                >
                  <Icon style={{ color: "#289a7c" }} name="plus" size={24} />
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: hp("2%"),
                    }}
                  >
                    {"  "}Account
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => logout()}>
                <View
                  style={{
                    flexDirection: "row",
                    // alignItems:"center",
                    // justifyContent:"center"
                  }}
                >
                  <Icon style={{ color: "#289a7c" }} name="minus" size={24} />
                  <Text
                    style={{
                      fontFamily: "Poppins_400Regular",
                      fontSize: hp("2%"),
                    }}
                  >
                    {"  "}Sign Out
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </BlurView>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};
const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageModal);

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    borderRadius: 20,
    padding: hp("5%"),
    width: wp("100%"),
    height: hp("100%"),
    flex: 1,
    flexGrow: 1,
  },
  modalText: {
    fontFamily: "Poppins_700Bold",
    fontSize: hp("3%"),
  },
  row: {
    flexDirection: "row",
    marginTop: hp("3%"),
    paddingHorizontal: hp("1.2%"),
  },
  img: {
    width: hp("4.2%"),
    height: hp("4.1%"),
    marginRight: hp("3%"),
  },
  imglk: {
    width: hp("3.8%"),
    height: hp("4.2%"),
    marginRight: hp("3%"),
  },
  close: {
    width: hp("2%"),
    height: hp("2%"),
  },
  clsContainer: {
    alignSelf: "flex-end",
    marginTop: hp("2%"),
    marginLeft: -hp("2%"),
  },
  title: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("2%"),
  },
  description: {
    fontFamily: "Poppins_400Regular",
    fontSize: hp("1.4%"),
    marginTop: -3,
  },
  container: {
    borderRadius: 20,
    width: wp("20%"),
    alignItems: "center",
    justifyContent: "center",
    height: hp("2.5%"),
    marginLeft: wp("2.2%"),
  },
  txt: {
    fontFamily: "Poppins_600SemiBold",
    fontSize: hp("1.2%"),
  },
});
