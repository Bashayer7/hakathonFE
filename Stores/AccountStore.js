import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import axios from "axios";
// import api from "./api";

class AccountStore {
  constructor() {
    makeAutoObservable(this);
  }
  Accounts = [];
}

const handleAdd = () => {
  const newAcc = {
    Name: Name,
    Iban: Iban,
  };
};

AccountStore.addNewAccount(newAcc);

addNewAccount = async (newAcc) => {
  await AsyncStorage.setAcc("myAccounts", JSON.stringify(this.Accounts));
};
