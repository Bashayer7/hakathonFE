import * as yup from "yup";

const schema = yup.object().shape({
  Fullname: yup.string().required("full name please"),
  IBAN: yup.string().matches("^KWd{2}[A-Z]{4}[A-Z0-9]{22}$"),
  bankname: yup.string,
});

export default schema;
