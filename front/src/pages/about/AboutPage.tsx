import ContactSection from "../../components/ContactSection"
import OurFounders from "./components/OurFounders"
import OurValues from "./components/OurValues"

const AboutPage = () => {
  return (
    <div className="text-black dark:text-light flex flex-col gap-20 py-14 px-6 md:px-8 max-w-7xl">
      <section className="flex flex-col gap-4 transition-colors duration-150">
        <h1 className="text-[50px] lg:text-[64px] font-bold text-main">
          Sobre nosotros
        </h1>

        <h2 className="text-[30px] lg:text-[40px] font-medium w-auto md:w-[640px]">
          Detrás de cualquier gran producto, hay un gran{" "}
          <strong className="text-main">equipo</strong>
        </h2>

        <p className="text-lg w-auto lg:w-2/3 leading-[2.5rem]">
          Promovemos la cooperación en equipo, la transparencia y el disfrute
          del proceso como componentes clave de un resultado exitoso
        </p>
      </section>

      <section className="flex flex-col gap-3 transition-colors duration-150">
        <h3 className="text-[35px] lg:text-[45px] font-bold text-main">
          Cultura
        </h3>

        <p className="text-base lg:text-[20px] w-auto leading-[2.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis
          illo, ipsam perspiciatis facere earum neque minus eveniet et totam
          temporibus, ducimus aliquid reprehenderit rerum tenetur itaque
          voluptates quas fugit. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Amet veniam nesciunt rerum quaerat quae dolor dicta
          quis provident.
        </p>
      </section>

      <section>
        <OurValues />
      </section>

      <section>
        <OurFounders />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}

export default AboutPage
