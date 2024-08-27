import * as yup from "yup"

import i18n from "../../i18n";

const translate = (key: string) => {
  return i18n.t(key);
};
export const ContactScheme = yup.object().shape({
  name: yup.string().required(translate("name-required")),
  email: yup
    .string()
    .email(translate("email-invalid"))
    .required(translate("email-required")),
  subject: yup.string().required(translate("subject-required")),
  description: yup.string().required(translate("description-required"))
})
