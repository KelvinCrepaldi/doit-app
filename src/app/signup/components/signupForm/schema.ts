import * as yup from "yup";
const signupSchema = yup.object().shape({
  name: yup.string().required("Escreva um nome."),
  email: yup
    .string()
    .required("Escreva seu email.")
    .email("Formato de e-mail inválido."),
  password: yup
    .string()
    .required("Escreva uma senha.")
    .min(6, "Senha precisa ter no minimo 6 caracteres."),
  confirmPassword: yup.string().required("Confirme a senha."),
});

export default signupSchema;
