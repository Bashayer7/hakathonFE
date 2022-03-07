import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import Dashboard from "../Home/Dashboard";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return !authStore.user ? (
    <Tab.Navigator initialRouteName="SignIn">
      <Tab.Screen name="SignIn" component={Signin} />
      <Tab.Screen name="SignUp" component={Signup} />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="Dashboard"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen name="Dashboard" component={Dashboard} />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
