// import { View, Text, Form, TextInput } from "react-native";
// import React from "react";
// import { useForm } from "react-hook-form";
// import schema from "../../Component/Beneficiary/Validation";
// import { yupResolver } from "@hookform/resolvers/yup";

// function Createbeneficiary() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = () => {
//     console.log(" new beneficiary added succefully");
//   };

//   return (
//     <ImageBackground
//       source={{
//         uri: "https://cutewallpaper.org/21/white-ios-wallpaper/FREEIOS7-desktop-white-parallax-HD-iPhone-iPad-wallpaper.jpg",
//       }}
//       style={styles.backgroundContainer}
//     >
//       <Text style={styles.logoText}>Banky</Text>
//       <View style={styles.logoContainer}>
//         <Image
//           source={{
//             uri: "https://library.kissclipart.com/20180912/lue/kissclipart-atm-card-clipart-atm-card-debit-card-credit-card-c570211793035308.png",
//           }}
//           style={styles.logo}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"firstname"}
//           onChangeText={(value) => setUser({ ...user, firstname: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"last name"}
//           onChangeText={(value) => setUser({ ...user, lastname: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"Username"}
//           onChangeText={(value) => setUser({ ...user, username: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View>
//         <TextInput
//           style={styles.input}
//           placeholder={"Password"}
//           onChangeText={(value) => setUser({ ...user, password: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"Civil ID"}
//           onChangeText={(value) => setUser({ ...user, civilId: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"email"}
//           onChangeText={(value) => setUser({ ...user, email: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <View style={styles.logoContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder={"Phone Number"}
//           onChangeText={(value) => setUser({ ...user, phonenumber: value })}
//           placeholderTextColor={"black"}
//           underlineColorAndroid={"transparent"}
//         />
//       </View>
//       <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
//         <Text style={styles.text}>Register</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// }

// export default Createbeneficiary;
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CreateBeneficiary = () => {
  return (
    <View>
      <Text>CreateBeneficiary</Text>
    </View>
  );
};

export default CreateBeneficiary;

const styles = StyleSheet.create({});
