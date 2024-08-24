import { Icon } from "@iconify/react/dist/iconify.js"
import ContactSection from "../../components/ContactSection"
import { Services } from "./components/Services"
import Fintech from "./components/Fintech"
import OurWork from "./components/OurWork"
import Payments from "./components/Payments"

const ServicesPage = () => {
  return (
    <div className="flex flex-col w-full gap-16 pb-14">
      <section className="flex flex-col gap-2 pt-20 items-center w-full h-[550px] text-white bg-blue-600">
        <div className="p-14 rounded-full bg-white">
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

      <section className="transform -translate-y-40">
        <Fintech />
      </section>

      <section className="transform -translate-y-20">
        <OurWork />
      </section>
      
      <section className="transform -translate-y-10">
        <Payments />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}

export default ServicesPage
