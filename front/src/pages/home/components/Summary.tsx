import { Icon } from "@iconify/react/dist/iconify.js"
import DashedCurve from "../../../utils/dashed-curve"

const Summary = () => {
  return (
    <div className="flex flex-col w-full text-black dark:text-light transition-colors duration-150 gap-16 xl:gap-[136px] relative">
      <div className="absolute w-[55%] top-[-64px] left-[-13px] z-10 hidden xl:block">
        <DashedCurve />
      </div>  

      {/* First */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="formkit:people"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">¿Quienes somos?</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] xl:max-w-[80%]">
            <span className="text-main">
              Equipo multidisciplinario
            </span>{" "}
            con expertos en fintech, tecnología, negocios, productos y
            operaciones.
          </h4>

          <div className="text-base leading-[27px] xl:max-w-[70%]">
            <p>
              Esto nos permite estar calificados y preparados para ofrecer una
              solución integral.
            </p>

            <p>
              Nuestras oficinas en Buenos Aires y Cordoba nos permiten cubrir todas
              las zonas horarias para mejorar la cooperación entre equipos.
            </p>
          </div>
        </div>

        <img src="/home/team.png" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>

      {/* Second */}
      <div className="flex flex-col items-center md:flex-row-reverse gap-4 xl:gap-[185px] z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="fa6-solid:face-smile"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">Nuestro enfoque</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] lg:max-w-[80%]">
            <span className="text-main">Entregamos</span> gran sofware
            con la mejor tecnología
          </h4>

          <div className="text-base leading-[27px] lg:max-w-[70%]">
            <p>
              Con una mentalidad de puesta en marcha, ofrecemos un gran software
              con ingeniería ágil. Puede confiar en nosotros para construir algo
              con impacto de una manera rápida y con un alto nivel de calidad.
              Nos enfocamos en comprender un problema y trabajamos junto con
              nuestros clientes para construir una solución y hacer que suceda.
            </p>
          </div>
        </div>

        <img src="/home/software.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>

      {/* Third */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="streamline:desktop-code"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">Nuestras tecnologias</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] lg:max-w-[80%]">
            <span className="text-main leading-5">Nos especializamos</span> con
            expertos en fintech, tecnología, negocios, productos y operaciones.
          </h4>

          <div className="text-base leading-[27px] lg:max-w-[70%]">
            <p>
              Algunas de las tecnologías en las que nos especializamos son:
              Javascript, Typescript, Node.js, NestJs, Ruby, React y React
              Native.
            </p>
          </div>
        </div>

        <img src="/home/tech.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>
    </div>
  )
}

export default Summary