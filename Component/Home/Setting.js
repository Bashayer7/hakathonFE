import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../../Stores/authStore";

const Setting = () => {
  return (
    <View>
      <TouchableOpacity onPress={authStore.signout}>
        <Text style={styles.logoText}>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  logoText: {
    color: "black",
    fontWeight: 600,
    fontSize: 30,
    color: "red",
    opacity: 0.9,
  },
});
