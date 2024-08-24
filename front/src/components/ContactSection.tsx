import { Link } from "react-router-dom"

const ContactSection = () => {
  return (
    <section className="flex lg:flex-row flex-col bg-main rounded-xl gap-8 items-center justify-between p-[30px] lg:py-[50px] lg:px-[110px]">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 lg:w-[500px]">
          <h3 className="text-xl lg:text-[29px] font-bold">¡Hablemos!</h3>

          <h4 className="text-[40px] lg:text-[64px] font-bold">
            ¡Trabajemos juntos!
          </h4>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <button className="py-5 px-[50px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-600/90">
          <Link
            to="contact"
            className="text-xl lg:text-2xl"
          >
            Contactanos
          </Link>
        </button>
      </div>
    </section>
  )
}
export default ContactSection
