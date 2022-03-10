import { View, Text } from "react-native";
import React from "react";
import { useForm } from "react-hook-form";
import schema from "../../Component/Beneficiary/Validation";

function Createbeneficiary() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = () => {
    console.log(" new beneficiary added succefully");
  };

  return (
    <View>
      {" "}
      class="container"
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label> Beneficiary Name</label>
        <input
          type={String}
          placeholder="name"
          {...register("beneficiaryname")}
        />
        <Text>
          {errors.beneficiaryname.message}
          <label>IBAN number</label>
          <input
            type={string}
            placeholder="IBAN Number here"
            {...register("IBAn Number")}
          />
        </Text>
        <Text>
          <label>Bank Name</label>
          <input
            type={string}
            placeholder="bank name "
            {...register("Bank Name")}
          />
        </Text>
      </Form>
    </View>
  );
}
r;
export default Createbeneficiary;
