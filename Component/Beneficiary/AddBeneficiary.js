import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Input,
  Image,
  useToast,
  VStack,
} from "native-base";
// import beneficiaryStore
import * as ImagePicker from "expo-image-picker";
const CreateBeneficiary = ({ navigation }) => {
  // const [image, setImage] = useState(null);
  const [beneficiary, setBeneficiary] = useState({
    name: "",
    IBAN: "",
    // image: null,
  });

  const handleBeneficiaryName = (value) => {
    setBeneficiary({ ...beneficiary, name: value });
  };
  const handleBeneficiaryIBAN = (value) => {
    setBeneficiary({ ...beneficiary, IBAN: value });
  };
  const handleCreate = () => {
    BeneficiaryStore.createBeneficiary(beneficiary, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Add Beneficiary
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Trip Name</FormControl.Label>
            <Input onChangeText={handleTripName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Trip Description</FormControl.Label>
            <Input onChangeText={handleTripDescription} />
          </FormControl>
          {/* <Button onPress={pickImage}>Pick an image from camera roll</Button> */}
          <Button mt="2" style={styles.btn} onPress={handleCreate}>
            Add
          </Button>
          {/* {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 100, height: 100, alignSelf: "center" }}
            />
          )} */}
        </VStack>
      </Box>
    </Center>
  );
};

export default Beneficiary;
