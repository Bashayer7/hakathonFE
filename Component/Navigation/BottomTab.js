import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { observer } from "mobx-react";
import Signin from "../Auth/SignIn";
import Signup from "../Auth/SignUp";
import authStore from "../../Stores/authStore";
import Icon from "react-native-vector-icons/FontAwesome";
import AppIcon from "react-native-vector-icons/MaterialIcons";
import Account from "../Dashboard/Account";
import Setting from "../Home/Setting";
import { TouchableOpacity } from "react-native-gesture-handler";
import plus from "../../Icons/plus.png";
import CreateBeneficiary from "../Beneficiary/CreateBeneficiary";
const Tab = createBottomTabNavigator();
const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: "center",
      ...styles.shadaw,
    }}
    onPress={onPress}
  >
    <View style={{ width: 70, height: 70, borderRadius: 35 }}></View>
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
        name="CreateBeneficiary"
        component={CreateBeneficiary}
        options={{
          tabBarLabel: "Add",
          tabBarIcon: ({ focused }) => (
            <Image
              source={plus}
              resizeMode="contain"
              Style={{
                width: 30,
                height: 30,
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...prop} />,
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => <AppIcon name="app-registration" />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: "Setting",
          tabBarIcon: ({ color, size }) => <AppIcon name="app-registration" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default observer(BottomTab);
