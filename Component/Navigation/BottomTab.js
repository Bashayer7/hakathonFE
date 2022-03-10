import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome";
import AppIcon from "react-native-vector-icons/MaterialIcons";
import StarIcon from "react-native-vector-icons/EvilIcons";
// import addIcon from "react-native-vector-icons/";
import TraIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Account from "../Dashboard/Account";
import Transfer from "../Dashboard/Transfer";
import Rewards from "../Dashboard/Rewards";
import DashboardCart from "../Dashboard/DashboardCart";
import Payment from "../Dashboard/Payment";
import Setting from "../Home/Setting";
import { TouchableOpacity } from "react-native-gesture-handler";
import blue from "../../Icons/blue.png";
import CreateBeneficiary from "../Beneficiary/CreateBeneficiary";
import Setting from "../Home/Setting";
import Account from "../Dashboard/Account";
import { StyleSheet, View, Image } from "react-native";

const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -40,
      left: 8,
      justifyContent: "center",
      ...StyleSheet.shadaw,
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "lightblue",
      }}
    ></View>
  </TouchableOpacity>
);

const BottomTab = () => {
  return !authStore.user ? (
    <Tab.Navigator initialRouteName="SignIn">
      <Tab.Screen
        name="SignIn"
        component={Signin}
        options={{
          tabBarLabel: "Sign in",
          tabBarIcon: ({ color, size }) => (
            <Icon name="sign-in" color="grey" size={20} />
          ),
        }}
      />

      <Tab.Screen
        name="SignUp"
        component={Signup}
        options={{
          tabBarLabel: "Sign up",
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="app-registration" color="grey" size={20} />
          ),
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
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="app-registration" color="grey" size={20} />
          ),
        }}
      />
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
      <Tab.Screen
        name="CreateBeneficiary"
        component={CreateBeneficiary}
        options={{
          tabBarLabel: "+",
          tabBarIcon: ({ focused }) => (
            <Image
              source={blue}
              resizeMode="contain"
              Style={{
                width: 30,
                height: 30,
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Transfer"
        component={Transfer}
        options={{
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color, size }) => (
            <TraIcon name="bank-transfer" color="grey" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          tabBarLabel: "Rewards",
          tabBarIcon: ({ color, size }) => (
            <StarIcon name="star" color="grey" size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => (
            <AppIcon name="app-registration" color="grey" size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
