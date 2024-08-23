import { useFormik } from "formik"
import { ContactScheme } from "../../../utils/schemes/ContactScheme"
import { useMutation } from "@tanstack/react-query"
import { SendEmail } from "../../../services/ContactService"
import { ContactInterface } from "../../../interfaces/Contact"

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
  return (
    <section className="flex flex-col gap-4 w-full sm:w-[500px]" id="contact">
      <form
        className="flex w-full flex-col m-auto px-6 md:p-0 md:max-w-[600px] gap-2"
        onSubmit={formik.handleSubmit}
      >
        <div
          className={`flex flex-col gap-1 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>Nombre completo</label>
          <input
            className="text-black"
            type="text"
            placeholder="Nombre completo"
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
          className={`flex flex-col gap-1 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>Email</label>
          <input
            className="text-black"
            type="email"
            placeholder="Email"
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
          className={`flex flex-col gap-1 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>Asunto</label>
          <input
            className="text-black"
            type="text"
            placeholder="Asunto"
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
          className={`flex flex-col gap-1 ${
            isPending ? "opacity-50" : "opacity-100"
          }`}
        >
          <label>Descripcion</label>
          <textarea
            className="text-black"
            placeholder="Descripcion"
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
          className="w-full bg-main py-2 text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isPending}
        >
          Enviar
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
