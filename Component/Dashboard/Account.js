import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";
import authStore from "../../Stores/authStore";

const Account = ({ navigation }) => {
  // const [Acc, setAcc] = useState({
  //   name: "",
  //   IBAN: "",
  // });
  // const handleCreate = () => {
  //   AccountStore.createAccount(IBAN, navigation);
  // };
  return (
    <View>
      <Text>{authStore.user.Account}</Text>
      <Text>{authStore.user.Amount}KD</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
});
