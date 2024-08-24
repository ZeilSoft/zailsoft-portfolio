import { Icon } from "@iconify/react/dist/iconify.js"
import ContactSection from "../../components/ContactSection"
import { Services } from "./components/Services"

const ServicesPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="flex flex-col gap-2 justify-center items-center w-full h-[550px] text-white bg-blue-600">
        <div className="p-4 rounded-full bg-white">
          <Icon
            icon="noto:rocket"
            width="40"
            height="40"
          />
        </div>

        <h2 className="text-3xl font-bold">
          Nuestros servicios{" "}
          <span className="text-3xl font-bold text-main">principales</span>
        </h2>

        <h3 className="text-center text-lg">¿En que podemos ayudarte?</h3>
      </section>

      <section>
        <Services />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}

export default ServicesPage
