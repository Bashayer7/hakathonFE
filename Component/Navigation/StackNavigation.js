import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../Dashboard/Account";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouterName="signin">
      <Screen name="Account" component={Account} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
