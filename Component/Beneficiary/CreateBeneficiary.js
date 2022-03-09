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
// import * as ImagePicker from "expo-image-picker";
const CreateBeneficiary = ({ navigation }) => {
  // const [image, setImage] = useState(null);
  const [beneficiary, setBeneficiary] = useState({
    Fullname: "",
    IBAN: "",
    Bankname: "",

    // image: null,
  });

  const schema = yup.object().shape({
    Fullname: yup.string().required("full name please"),
    IBAN: yup.string().matches("^KWd{2}[A-Z]{4}[A-Z0-9]{22}$"),
  });

  function Createbeneficiary() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useform({ resolver: yupResolver(schema) });
  }

  const onSubmit = () => {
    console.log(" new beneficiary added succefully");
  };

  const handleBeneficiaryFullname = (value) => {
    setBeneficiary({ ...beneficiary, name: value });
  };
  const handleBeneficiaryIBAN = (value) => {
    setBeneficiary({ ...beneficiary, IBAN: value });
  };
  const handleBeneficiarybankname = (value) => {
    setBeneficiary({ ...beneficiary, bankname: value });
  };
  const handleCreate = () => {
    BeneficirayStore.createBeneficiary(beneficiary, navigation);
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
            <FormControl.Label>BeneficiaryFullname</FormControl.Label>
            <Input onChangeText={handleBeneficiaryFullname} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Beneficiary IBAN</FormControl.Label>
            <Input onChangeText={handleBeneficiaryIBAN} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Beneficiary Bankname</FormControl.Label>
            <Input onChangeText={handleBeneficiarybankname} />
          </FormControl>
          {/* <Button onPress={pickImage}>Pick an image from camera roll</Button> */}
          <Button mt="2" style={styles.btn} onPress={handleCreate}>
            Add Beneficiary
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

export default CreateBeneficiary;
