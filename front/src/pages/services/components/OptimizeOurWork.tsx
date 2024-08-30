const OptimizeOurWork = () => {
  return (
    <div className="text-dark dark:text-light flex flex-col gap-4 justify-center items-center lg:flex-row-reverse lg:justify-evenly transition-colors duration-150">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold max-w-[580px] lg:text-[30px] leading-[35px] lg:leading-[51px]">
          Cómo Optimizamos <span className="text-main">Nuestro Trabajo</span>
        </h3>

        <p className="text-base max-w-[580px] leading-[29px]">
          En ZeilSoft, más allá de las variadas tecnologías que dan forma a
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

      <img src="/services/optimize.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[436px]" />
    </div>
  )
}
export default OptimizeOurWork
