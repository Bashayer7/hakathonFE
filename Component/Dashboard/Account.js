import { StyleSheet, Text, View, Image } from "react-native";
import React, { useState } from "react";

const Account = ({ navigation }) => {
  const [Acc, setAcc] = useState({
    name: "",
    IBAN: "",
  });
  const handleCreate = () => {
    AccountStore.createAccount(IBAN, navigation);
  };
  return (
    <View>
      <Text>this is account Screen</Text>
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
