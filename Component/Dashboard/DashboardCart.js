import { StyleSheet, View, ImageBackground, Text } from "react-native";
import React from "react";

const DashboardCart = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://cutewallpaper.org/21/white-ios-wallpaper/FREEIOS7-desktop-white-parallax-HD-iPhone-iPad-wallpaper.jpg",
      }}
      style={styles.container}
    >
      <View style={styles.cardsRed}>
        <Text style={styles.text}>Accounts</Text>
      </View>
      <View style={styles.cardsRed}>
        <Text style={styles.text}>Transfers</Text>
      </View>
      <View style={styles.cardsRed}>
        <Text style={styles.text}>Payment</Text>
      </View>
      <View style={styles.cardsRed}>
        <Text style={styles.text}>Beneficiary</Text>
      </View>
    </ImageBackground>
  );
};

export default DashboardCart;

const styles = StyleSheet.create({
  cardsRed: {
    textAlign: "center",
    alignItems: "center",
    opacity: 0.8,
    backgroundColor: "#413C69",
    borderRadius: 10,
    width: "48%",
    height: "48.5%",
  },
  container: {
    padding: 10,
    width: "100%",
    height: "100%",
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: 900,
    position: "absolute",
    top: 150,
  },
});
