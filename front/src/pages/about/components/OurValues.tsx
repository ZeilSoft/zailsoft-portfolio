import Value from "../../../components/Value"

const OurValues = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3">
      <div className="flex flex-col sm:basis-1/2 md:basis-1/3 gap-2">
        <h3 className="text-4xl font-bold">Nuestros Valores</h3>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          totam iste deserunt aliquid impedit, dolor modi at voluptates, qui
          iure natus cumque aut autem perspiciatis adipisci atque nulla dicta
          repellendus.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex molestiae
          commodi excepturi tenetur obcaecati, adipisci enim sunt. Facilis
          aliquid quae aut amet iusto quos doloribus saepe deserunt! Culpa, cum
          ab!
        </p>

        <div className="flex justify-center items-center">
          <button className="py-2 px-4 rounded-md border border-main hover:bg-main/90">
            <a href="#contact">Contactenos</a>
          </button>
        </div>
      </div>

      <div className="flex sm:basis-1/2 md:basis-2/3">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 w-full gap-2">
          <Value icon="fa-solid:lightbulb" text="Integridad" />
          <Value icon="fa-solid:lightbulb" text="Innovacion" />
          <Value icon="fa-solid:lightbulb" text="Mejora continua" />
          <Value icon="fa-solid:lightbulb" text="Trabajo en equipo" />
          <Value icon="fa-solid:lightbulb" text="Adaptabilidad" />
          <Value icon="fa-solid:lightbulb" text="Responsabilidad" />
        </div>
      </div>

    </div>
  )
}
export default OurValues
