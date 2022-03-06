import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import Home from "../Home";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouterName="Home">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: {
            backgroundColor: "grey",
          },
          headerTintColor: "blue",
        }}
      />
      <Screen name="signin" component={Signin} />
      <Screen name="signup" component={Signup} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
