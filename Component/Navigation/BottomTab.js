import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome";
import AppIcon from "react-native-vector-icons/MaterialIcons";

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
      <Tab.Screen n="Home" component={Home} />

      <Icon name="Home" />
      <Tab.Screen
        name="DashboardCart"
        component={DashboardCart}
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => <Icon name="add-to-home-screen" />,
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

      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => <Icon name="payment" />,
        }}
      />

      <Tab.Screen
        name="Benficires"
        component={Benficires}
        options={{
          tabBarLabel: "Sign In",
          tabBarIcon: ({ color, size }) => <Icon name="people" />,
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={Transfers}
        options={{
          tabBarLabel: "Sign Up",
          tabBarIcon: ({ color, size }) => (
            <TransferIcon name="bank-transfer" />
          ),
        }}
      />
    </Tab.Navigator>
  ) : (
    <Tab.Navigator
      initialRouteName="Account"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    ></Tab.Navigator>
  );
};

export default observer(BottomTab);
