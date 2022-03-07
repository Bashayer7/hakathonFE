import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import StackNavigation from "./Component/Navigation/StackNavigation";
//import BottomTab from "./components/Navigation/BottomTab";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <BottomTab />*/}
        <StackNavigation />
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
