import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome";
import AppIcon from "react-native-vector-icons/MaterialIcons";
import { Text } from "react-native";
import Account from "../Dashboard/Account";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return !authStore.user ? (
    <Tab.Navigator initialRouteName="SignIn">
      <Tab.Screen
        name="SignIn"
        component={Signin}
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => <Icon name="sign-in" />,
        }}
      />

      <Tab.Screen
        name="SignUp"
        component={Signup}
        options={{
          tabBarLabel: "Sign up",
          tabBarIcon: ({ color, size }) => <AppIcon name="app-registration" />,
        }}
      />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="Account"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Account"
        component={Account}
        // options={{
        //   tabBarLabel: "Sign up",
        //   tabBarIcon: ({ color, size }) => <AppIcon name="app-registration" />,
        // }}
      />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
