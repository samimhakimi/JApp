import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";

const Story = (props) => {
  const {
    story: { source },
  } = props;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Image style={styles.images} {...{ source }} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  images: {
    ...StyleSheet.absoluteFillObject,
    width: null,
    height: null,
  },
});
export default Story;
