import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Home";
import DashboardCart from "./DashboardCart";
import Payment from "./Payment";
import Benficires from "./Benficires";
import Transfers from "./Transfer";
import Icon from "react-native-vector-icons/MaterialIcons";
import TransferIcon from "react-native-vector-icons/MaterialCommunityIcons";

const Acc = createBottomTabNavigator();

export default function Account() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          bordeRadius: 15,
          height: 90,
          ...styles.shadow,
        },
      }}
    >
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
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => <Icon name="people" />,
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={Transfers}
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => (
            <TransferIcon name="bank-transfer" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
