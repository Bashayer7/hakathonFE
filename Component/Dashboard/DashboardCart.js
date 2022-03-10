import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Account from "./Account";
import data from "./data";

const DashboardCart = ({ navigation }) => {
  const Dashb = data.map((data) => (
    <Account key={data._id} data={data} navigation={navigation} />
  ));
  console.log(Dashb);
  return (
    <View>
      <Text style={styles.title}></Text>
      <ScrollView style={styles.container}>{Dashb}</ScrollView>
    </View>
  );
};

export default DashboardCart;

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 20,
  },
  container: {
    width: "100%",
  },
});
