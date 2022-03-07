import { makeAutoObservable } from "mobx";
// import axios from "axios";
import api from "./api";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];
}
