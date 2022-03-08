import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DashboardCart = ({ navigation }) => {
  const DashboardCart = authStore.data.map((data) => (
    <Item key={data._id} data={data} navigation={navigation} />
  ));
  console.log(DashboardCart);
  return (
    <View>
      <Text style={styles.title}>My Dashboard</Text>
      <ScrollView style={styles.container}>{DashboardCart}</ScrollView>
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
