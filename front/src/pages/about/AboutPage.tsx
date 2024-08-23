import OurFounders from "./components/OurFounders"
import OurHistory from "./components/Ourhistory"
import OurValues from "./components/OurValues"

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-8 text-white py-4">
      <section className="flex flex-col gap-4">
        <h1 className="text-6xl font-bold text-main">Sobre nosotros</h1>

        <h2 className="text-3xl">
          Detrás de cualquier gran producto, hay un gran{" "}
          <strong className="text-main">equipo</strong>
        </h2>

        <p className="text-sm">
          Promovemos la cooperación en equipo, la transparencia y el disfrute
          del proceso como componentes clave de un resultado exitoso
        </p>

      </section>

      <section>

        <OurHistory />

      </section>

      <section>

        <h3 className="text-6xl font-bold text-main">Cultura</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id reiciendis
          illo, ipsam perspiciatis facere earum neque minus eveniet et totam
          temporibus, ducimus aliquid reprehenderit rerum tenetur itaque
          voluptates quas fugit.
        </p>

      </section>

      <section>

        <OurValues />

      </section>

      <section>
        <OurFounders />
      </section>

      <section className="flex sm:flex-row flex-col h-64 bg-main rounded-xl">

        <div className="flex basis-2/2 sm:basis-1/2 items-center justify-center flex-col">

          <div className="flex flex-col gap-3">

            <h3 className="text-2xl font-bold text-start">Di hola</h3>

            <h4 className="text-4xl font-bold text-start">
              ¡trabajemos juntos!
            </h4>

          </div>

        </div>

        <div className="flex basis-2/2 sm:basis-1/2 items-center justify-center">

          <button className="py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-600/90">
            <a href="contact">Contactanos</a>
          </button>

        </div>
      </section>
    </div>
  )
}

export default AboutPage
