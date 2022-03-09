import React from "react";
import { observer } from "mobx-react";
import { StyleSheet, Text, View } from "react-native";

// import TripItem from "./TripItem";
import { ScrollView } from "native-base";
import Loading from "../loading";

const BeneficiaryList = ({ navigation }) => {
  if (beneficiaryStore.loading) return <Loading />;
  const beneficiary = beneficiaryStore.beneficiaries.map((beneficiary) => (
    <BeneficiaryItem
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
