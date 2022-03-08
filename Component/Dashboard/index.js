import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { observer } from "mobx-react";

const Dashboard = () => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default observer(Dashboard);

const styles = StyleSheet.create({});
