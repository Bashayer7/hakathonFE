import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "native-base";
import Loading from "../loading";
import beneficiaryStore from "../../Stores/BeneficiaryStore";

const BeneficiaryList = ({ navigation }) => {
  if (BeneficiaryList.loading) return <Loading />;
  const beneficiary = beneficiaryStore.beneficiaries.map((beneficiary) => (
    <BeneficiaryList
      key={beneficiary._id}
      beneficiary={beneficiary}
      navigation={navigation}
    />
  ));
  return <ScrollView style={styles.list}>{beneficiary}</ScrollView>;
};

export default observer(BeneficiaryList);

const styles = StyleSheet.create({
  list: {
    container: {
      width: "100%",
    },
  },
});
