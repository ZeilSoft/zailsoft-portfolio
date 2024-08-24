import OurFounders from "./components/OurFounders"
// import OurHistory from "./components/OurHistory"
import OurValues from "./components/OurValues"

const AboutPage = () => {
  return (
    <div className="text-white flex flex-col gap-20 py-14 px-6 md:px-8">
      <section className="flex flex-col gap-4">
        <h1 className="text-[50px] lg:text-[64px] font-bold text-main">Sobre nosotros</h1>

        <h2 className="text-[30px] lg:text-[40px] font-medium w-auto md:w-[640px]">
          Detrás de cualquier gran producto, hay un gran{" "}
          <strong className="text-main">equipo</strong>
        </h2>

        <p className="text-lg w-auto lg:w-2/3 leading-[2.5rem]">
          Promovemos la cooperación en equipo, la transparencia y el disfrute
          del proceso como componentes clave de un resultado exitoso
        </p>
      </section>

      {/* <section>
        <OurHistory />
      </section> */}

      <section className="flex flex-col gap-3">
        <h3 className="text-[35px] lg:text-[45px] font-bold text-main">Cultura</h3>

        <p className="text-base lg:text-[20px] w-auto leading-[2.5rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis
          illo, ipsam perspiciatis facere earum neque minus eveniet et totam
          temporibus, ducimus aliquid reprehenderit rerum tenetur itaque
          voluptates quas fugit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet veniam nesciunt rerum quaerat quae dolor dicta quis provident.
        </p>
      </section>

      <section>
        <OurValues />
      </section>

      <section>
        <OurFounders />
      </section>

      <section className="flex lg:flex-row flex-col bg-main rounded-xl gap-8 items-center justify-between p-[30px] lg:py-[50px] lg:px-[110px">
        <div className="flex flex-col">
          <div className="flex flex-col gap-3 lg:w-[500px]">
            <h3 className="text-xl lg:text-[29px] font-bold">
              ¡Hablemos!
            </h3>

            <h4 className="text-[40px] lg:text-[64px] font-bold">
              ¡Trabajemos juntos!
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button className="py-5 px-[50px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-600/90">
            <a href="contact" className="text-xl lg:text-2xl">Contactanos</a>
          </button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage