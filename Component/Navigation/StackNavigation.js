import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouterName="signin">
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
