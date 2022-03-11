import { StyleSheet, Text, View, Image } from "react-native";
import authStore from "../../Stores/authStore";

const Account = () => {
  console.log(authStore.user.account);
  return (
    <View>
      <Text style={styles.text}>{authStore.user.account}</Text>
      <Text style={styles.text}>{authStore.user.amount}KD</Text>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 50,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    fontWeight: 300,
    fontSize: 30,
    color: "black",
    opacity: 0.9,
  },
});
