import emailjs from "@emailjs/browser"
export default async function SendEmail(formData : FormData) {
  try {
    const data = Object.fromEntries(formData.entries());
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      data,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    return true
  } catch (error) {
    throw error
  }
}
