const OurWork = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 text-white">
      <div className="flex flex-col basis-2/2 md:basis-1/2 gap-4 justify-center">
        <h3 className="text-3xl">
          Cómo Optimizamos <span className="text-main">Nuestro Trabajo</span>
        </h3>

        <p>
          En Vangwe, más allá de las variadas tecnologías que dan forma a
          nuestros proyectos, aprovechamos una gama de herramientas para
          simplificar nuestros procesos diarios. Nuestro kit de herramientas
          incluye Notion, Harvest, GSuite, Timetastic y Slack. Estas
          herramientas armonizan de manera efectiva, ayudando en el intercambio
          de ideas, el seguimiento del tiempo, la comunicación, la programación
          y el trabajo colaborativo. Unidos, respaldan las metodologías de
          trabajo de Vangwe, fomentando la eficiencia y la coordinación sin
          interrupciones.
        </p>
      </div>

      <div className="flex flex-col basis-2/2 md:basis-1/2">
      <img src="/services/work.webp" alt="" />
      </div>
    </div>
  )
}
export default OurWork
