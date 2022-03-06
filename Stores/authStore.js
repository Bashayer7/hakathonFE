import { makeAutoObservable } from "mobx";
import api from "./api";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  constructor() {
    makeAutoObservable(this);
  }
  user = null;

  setUser = async (token) => {
    await AsyncStorage.setItem("token", token);
    this.user = decode(token);
    api.defaults.headers.common.Authorization = `Beare ${token}`;
  };

  signUp = async (user, navigation) => {
    try {
      const res = await api.post("/signup", user);
      this.setUser(res.data.token);
      navigation.navigate("Home");
    } catch (error) {
      console.log(error);
    }
  };

  signIn = async (user, navigation) => {
    try {
      const res = await api.post("/signin", user);
      this.setUser(res.data.token);
      navigation.navigate("Trips");
    } catch (error) {
      console.log(error);
    }
  };
}
