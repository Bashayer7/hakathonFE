//Icons
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconLock from "react-native-vector-icons/Feather";

// react native import
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import { observer } from "mobx-react-lite";
import authStore from "../../Stores/authStore";

const { width: WIDTH } = Dimensions.get("window");
const Home = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handlesubmit = () => {
    console.log(user);
    authStore.signIn(user);
    // \\call sign in functioon from auth store
  };
  let eyeCon = true;
  const handleEye = () => {
    eyeCon = eyeCon ? false : true;
  };
  return (
    <ImageBackground
      source={{
        uri: "https://cutewallpaper.org/21/white-ios-wallpaper/FREEIOS7-desktop-white-parallax-HD-iPhone-iPad-wallpaper.jpg",
      }}
      style={styles.backgroundContainer}
    >
      <Text style={styles.logoText}>Banky</Text>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://library.kissclipart.com/20180912/lue/kissclipart-atm-card-clipart-atm-card-debit-card-credit-card-c570211793035308.png",
          }}
          style={styles.logo}
        />
      </View>
      <View style={styles.logoContainer}>
        <Icon
          style={styles.inputIcon}
          name={"ios-person-outline"}
          size={28}
          color={"black"}
        />
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          onChangeText={(value) => setUser({ ...user, username: value })}
          placeholderTextColor={"black"}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View>
        <TouchableOpacity>
          <IconLock
            onPress={handlesubmit}
            style={styles.inputIcon}
            name={"lock"}
            size={28}
            color={"black"}
          />
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder={"Password"}
          onChangeText={(value) => setUser({ ...user, password: value })}
          secureTextEntry={eyeCon}
          placeholderTextColor={"black"}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.btnEye} onPress={handleEye}>
          <Icon name={"ios-eye-outline"} size={26} color={"black"} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default observer(Home);
const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 150,
    height: 150,
    bottom: 30,
  },
  logoText: {
    color: "black",
    fontWeight: 700,
    fontSize: 40,

    opacity: 0.5,
  },
  input: {
    width: WIDTH - 40,
    height: 40,
    borderRadius: 45,
    borderColor: "grey",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: 550,
    paddingLeft: 45,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
    opacity: 0.4,
  },
  inputIcon: {
    position: "absolute",
    top: 8,
    left: 37,
  },
  btnEye: {
    position: "absolute",
    top: 8,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 40,
    height: 40,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "#016afb",
    justifyContent: "center",
    marginTop: 20,
    opacity: 0.8,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
});
