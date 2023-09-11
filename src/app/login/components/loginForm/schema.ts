import * as yup from "yup";
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor escreva seu email.")
    .email("Formato de e-mail inválido."),
  password: yup
    .string()
    .required("Por favor escreva uma senha.")
    .min(6, "Senha precisa ter no minimo 6 caracteres."),
});

export default loginSchema;
