import { useFormik } from "formik"
import { ContactScheme } from "../../../utils/schemes/ContactScheme"
import { useMutation } from "@tanstack/react-query"
import { SendEmail } from "../../../services/ContactService"
import { ContactInterface } from "../../../interfaces/Contact"
import { useTranslation } from "react-i18next"

const ContactForm = () => {
  const initialValues: ContactInterface = {
    name: "",
    email: "",
    subject: "",
    description: ""
  }

  const { mutate, isPending, error, data } = useMutation({
    mutationKey: ["sendEmail"],
    mutationFn: SendEmail
  })

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ContactScheme,
    onSubmit: (values) => {
      mutate(values)
    }
  })

  const { t } = useTranslation();

  return (
    <section className="flex flex-col gap-4 w-full " id="contact">
      <form
        className="flex w-full flex-col m-auto md:max-w-[600px] gap-4"
        onSubmit={formik.handleSubmit}
      >
        <div
          className={`flex flex-col gap-2 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>{t("fullname")}</label>
          <input
            className="text-white bg-[#0E100F] border-none"
            type="text"
            placeholder={t("fullname")}
            {...formik.getFieldProps("name")}
            disabled={isPending}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="font-bold text-[#ff4444]">
              {formik.errors.name}
            </small>
          )}
        </div>

        <div
          className={`flex flex-col gap-2 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>{t("email")}</label>
          <input
            className="text-white bg-[#0E100F] border-none"
            type="email"
            placeholder={t("email")}
            {...formik.getFieldProps("email")}
            disabled={isPending}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="font-bold text-[#ff4444]">
              {formik.errors.email}
            </small>
          )}
        </div>

        <div
          className={`flex flex-col gap-2 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>{t("subject")}</label>
          <input
            className="text-white bg-[#0E100F] border-none"
            type="text"
            placeholder={t("subject")}
            {...formik.getFieldProps("subject")}
            disabled={isPending}
          />
          {formik.touched.subject && formik.errors.subject && (
            <small className="font-bold text-[#ff4444]">
              {formik.errors.subject}
            </small>
          )}
        </div>

        <div
          className={`flex flex-col gap-2 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>{t("description")}</label>
          <textarea
            className="text-white bg-[#0E100F] border-none"
            placeholder={t("description")}
            {...formik.getFieldProps("description")}
            disabled={isPending}
            rows={7}
          />
          {formik.touched.description && formik.errors.description && (
            <small className="font-bold text-[#ff4444]">
              {formik.errors.description}
            </small>
          )}
        </div>

        <button
          className="w-full bg-main hover:bg-main/80 transition-colors duration-300 py-2 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isPending}
        >
          {t("send")}
        </button>

        {error && (
          <small className="font-bold text-[#ff4444]">{error.message}</small>
        )}
        
        {data && (
          <small className="font-bold text-[#ff4444]">Ha habido un error</small>
        )}
      </form>
    </section>
  )
}
export default ContactForm
