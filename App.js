import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import BottomTab from "./Component/Navigation/BottomTab";

// import StackNavigation from "./Component/Navigation/StackNavigation";
export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <StackNavigation /> */}
        <BottomTab />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
