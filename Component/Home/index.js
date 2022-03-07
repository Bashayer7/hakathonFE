import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";

const Home = () => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("signin")}
        style={styles.button}
      >
        <Text style={styles.button}>Sign in</Text>
      </Button>
      <Button
        onPress={() => navigation.navigate("signup")}
        style={styles.button}
      >
        <Text style={styles.button}>Sign up</Text>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    color: "black",
    height: 50,
    fontSize: 20,
    margin: 15,
    width: 100,
    textAlign: "center",
  },
});
