import * as yup from "yup"

export const ContactScheme = yup.object().shape({
  name: yup.string().required("El nombre es requerido"),
  email: yup
    .string()
    .email("El email es requerido")
    .required("El email es requerido"),
  subject: yup.string().required("El asunto es requerido"),
  description: yup.string().required("La descripción es requerida")
})
