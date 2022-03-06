import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Link,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import authstore from "../../Stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    email: "",
    phonenumber: "",
    civilId: "",
  });
  const handleSubmit = () => {
    if (user.password === user.password) authstore.signUp(user);
    else
      toast.show({
        title: "wrong password",
        status: "danger",
        description: "Invalid password",
      });
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
          Welcome to the family !
        </Heading>
        <Heading
          mt="1"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign up to join!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
          </FormControl>
          <Input
            onChangeText={(value) => setUser({ ...user, username: value })}
          />

          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(value) => setUser({ ...user, password: value })}
            />
          </FormControl>
          <Button mt="2" colorScheme="blue" onPress={handleSubmit}>
            Sign Up
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I already have an account
            </Text>
            <Link
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate("signin")}
            >
              Sign in
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;
