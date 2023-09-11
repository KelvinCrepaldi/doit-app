import * as yup from "yup";

const taskSchema = yup.object().shape({
  title: yup
    .string()
    .required("Por favor escreva uma atividade.")
    .min(5, "A descrição precisa ter no minimo 6 caracteres."),
});

export default taskSchema;
