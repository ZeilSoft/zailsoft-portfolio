import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import ContactSocial from "./components/ContactSocial"

const ContactPage = () => {
  return (
    <div className="text-yellow-100 flex flex-col gap-32 py-14 px-6 md:px-8 max-w-7xl w-full">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] lg:text-[55px] leading-tight font-bold text-center">
            Habla con <strong className="text-[#374151]">Nosotros</strong>
          </h2>

          <h2 className="text-lg font-medium text-center">
            ¿Como podemos ayudarte?
          </h2>
        </div>

        <ContactForm />
      </section>

      <section>
        <ContactInfo />
      </section>

      <section>
        <ContactSocial />
      </section>
    </div>
  )
}

export default ContactPage
