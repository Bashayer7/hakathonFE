import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome";
import AppIcon from "react-native-vector-icons/MaterialIcons";
import SetIcon from "react-native-vector-icons/AntDesign";
import TraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import PeopIcon from "react-native-vector-icons/Ionicons";
import Payment from "../Dashboard/Payment";
import Transfer from "../Dashboard/Transfer";
import Setting from "../Home/Setting";
import DashboardCart from "../Dashboard/DashboardCart";
import BeneficiaryList from "../Beneficiary/BeneficiaryList";
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
      initialRouteName="Dashboard"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: "#694fad" }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardCart}
        options={{
          tabBarLabel: "...",
          tabBarIcon: ({ color, size }) => (
            <TraIcon name="dots-horizontal" color="grey" size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="Payment"
        component={Payment}
        options={{
          tabBarLabel: "Payment",
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="payment" color="grey" size={20} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="CreateBeneficiary"
        component={CreateBeneficiary}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ color, size }) => (
            <BenfIcon name="plus" color="green" size={40} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color, size }) => (
            <TraIcon name="bank-transfer" color="lightblue" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="BenficiaryList"
        component={BeneficiaryList}
        options={{
          tabBarLabel: "Benficiary",
          tabBarIcon: ({ color, size }) => (
            <PeopIcon name="people" color="grey" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <SetIcon name="setting" color="grey" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
