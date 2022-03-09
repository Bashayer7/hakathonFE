import { makeAutoObservable, configure } from "mobx";
import api from "./api";
import authStore from "./authStore";
// import profileStore from "./profileStore";
configure({
  enforceActions: "never",
});
class BeneficiaryStore {
  constructor() {
    makeAutoObservable(this);
  }
  beneficiary = [];
  loading = true;
  getBeneficiaries = async () => {
    try {
      const res = await api.get("/beneficiary");
      this.beneficiary = res.data;
      profileStore.getProfiles();
      this.loading = false;
    } catch (error) {
      console.log(
        "🚀 ~ file: beneficiaryStore.js ~ line 15 ~ BeneficiaryStore ~ getBeneficiary= ~ error",
        error
      );
    }
  };
  createBeneficiary = async (beneficiary, navigation) => {
    try {
      // const formData = new FormData();
      // for (const key in beneficiary) formData.append(key, beneficiary[key]);
      const profile = profileStore.profiles.find(
        (profile) => profile.owner._id === authStore.user._id
      );
      // const res = await axios.post(
      //   `/${profile._id}`,
      //   formData
      // {
      //   headers: { "Content-Type": "multipart/form-data" },
      // }
      // );
      const res = await api.post(`/profiles/`, beneficiary);
      this.beneficiary.push(res.data);
      profile.beneficiary.push(res.data);
      navigation.navigate("beneficiary");
    } catch (error) {
      console.log(
        "🚀 ~ file: beneficiaryStore.js ~ line 27 ~ BeneficiaryStore ~ createBeneficiary=async ~ error",
        error
      );
    }
  };
  updateBeneficiary = async (updatedBeneficiary, toast) => {
    try {
      const res = await api.put(
        `/beneficiaries/${updatedBeneficiary._id}`,
        updatedBeneficiary
      );
      let tempBeneficiaries = this.beneficiraies.map((beneficiary) =>
        beneficiary._id === updatedBeneficiary._id ? res.data : beneficiary
      );
      this.beneficiaries = tempBeneficiaries;
      toast.show({
        title: `Your Beneficiary has been updated`,
        status: "success",
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: beneficiaryStore.js ~ line 38 ~ BeneficiaryStore ~ updateBeneficiary=async ~ error",
        error
      );
    }
  };
  deleteBeneficiary = async (beneficiaryId, navigation, toast) => {
    try {
      await api.delete(`/benefiaciary/${beneficiaryId}`);
      let tempBeneficiaries = this.beneficiaries.filter(
        (beneficiary) => beneficiary._id !== beneficirayId
      );
      this.beneficiraies = tempBeneficiraies;
      navigation.navigate("Beneficiraies");
      toast.show({
        title: `Your Beneficiary has been deleted`,
        status: "danger",
      });
    } catch (error) {
      console.log(
        "🚀 ~ file: beneficiaryStore.js ~ line 55 ~ BeneficiaryStore ~ deleteBeneficiary ~ error",
        error
      );
    }
  };
}
const beneficiaryStore = new BeneficiaryStore();
beneficiaryStore.getBeneficiaries();
export default beneficiaryStore;
