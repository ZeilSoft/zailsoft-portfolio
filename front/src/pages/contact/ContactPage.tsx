import Contact from "./components/Contact"
import ContactInfo from "./components/ContactInfo"
import ContactSocial from "./components/ContactSocial"

const ContactPage = () => {
  return (
    <div className="text-yellow-100 flex flex-col gap-6 py-4 justify-center items-center">
      <section>
        <h2 className="text-6xl font-bold text-center">
          Di <strong className="text-main">Hola!!</strong>
        </h2>

        <h2 className="text-md font-bold text-center">
          ¿Como podemos ayudarte?
        </h2>
      </section>
      <section>
        <Contact />
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
