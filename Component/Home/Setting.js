import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/Ionicons";
import IconFeather from "react-native-vector-icons/Feather";
const Setting = () => {
  return (
    <View>
      <Text style={styles.usernameText}>@{authStore.user.username}</Text>
      <Text style={styles.logoText}>
        Language
        <Icon
          style={styles.icons}
          name={"globe-outline"}
          size={28}
          color={"black"}
        />
      </Text>
      <TouchableOpacity onPress={authStore.signout}>
        <Text style={styles.logoText}>
          logout<View></View>
          <IconFeather
            style={styles.icons}
            name={"log-out"}
            size={28}
            color={"black"}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  logoText: {
    fontWeight: 600,
    fontSize: 30,
    color: "black",
    opacity: 0.9,
    alignItems: "flex-end",
  },
  usernameText: {
    textAlign: "center",
    fontWeight: 300,
    fontSize: 30,
    color: "grey",
    opacity: 0.9,
  },
  icons: {},
});
