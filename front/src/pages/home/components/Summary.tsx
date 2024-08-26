import { Icon } from "@iconify/react/dist/iconify.js"
import DashedCurve from "../../../utils/dashed-curve"

const Summary = () => {
  return (
    <div className="flex flex-col w-full text-white gap-24 lg:gap-56 relative">
      <div className="w-[55%] -top-16 absolute -z-10 hidden xl:block">
        <DashedCurve />
      </div>
      <div className="flex flex-col md:flex-row gap-4 m-auto">
        <div className="flex flex-col basis-12/12 md:basis-7/12 gap-4  xl:pl-10">
          <div className="flex flex-row items-center gap-4">
            <div className="p-4 bg-main rounded-full">
              <Icon
                icon="formkit:people"
                width="24"
                height="24"
                color="white"
              />
            </div>

            <h3 className="text-lg text-white">Quienes somos</h3>
          </div>

          <h4 className="text-4xl leading-[60px]">
            <span className="text-main leading-5">
              Equipo multidisciplinario
            </span>{" "}
            con expertos en fintech, tecnología, negocios, productos y
            operaciones.
          </h4>

          <div className="w-[80%] text-sm">
            <p>
              Esto nos permite estar calificados y preparados para ofrecer una
              solución integral.
            </p>

            <p>
              Nuestras oficinas en Berlín y Montevideo nos permiten cubrir todas
              las zonas horarias para mejorar la cooperación entre equipos.
            </p>
          </div>
        </div>

        <div className="flex basis-12/12 md:basis-5/12 justify-center items-center">
          <img
            src="/code.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse gap-4 m-auto">
        <div className="flex flex-col basis-12/12 md:basis-7/12 gap-4  xl:pl-28">
          <div className="flex flex-row items-center gap-4">
            <div className="p-4 bg-main rounded-full">
              <Icon
                icon="fa6-solid:face-smile"
                width="24"
                height="24"
              />
            </div>

            <h3 className="text-lg text-white">Nuestro enfoque</h3>
          </div>

          <h4 className="text-4xl leading-[60px]">
            <span className="text-main leading-5">Entregamos</span> gran sofware
            con la mejor tecnología
          </h4>

          <div className="w-[80%] text-sm">
            <p>
              Con una mentalidad de puesta en marcha, ofrecemos un gran software
              con ingeniería ágil. Puede confiar en nosotros para construir algo
              con impacto de una manera rápida y con un alto nivel de calidad.
              Nos enfocamos en comprender un problema y trabajamos junto con
              nuestros clientes para construir una solución y hacer que suceda.
            </p>
          </div>
        </div>

        <div className="flex basis-12/12 md:basis-5/12 justify-center items-center">
          <img
            src="/code.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 m-auto">
        <div className="flex flex-col basis-12/12 md:basis-7/12 gap-4">
          <div className="flex flex-row items-center gap-4">
            <div className="p-4 bg-main rounded-full">
              <Icon
                icon="streamline:desktop-code"
                width="24"
                height="24"
              />
            </div>

            <h3 className="text-lg text-white">Nuestras tecnologias</h3>
          </div>

          <h4 className="text-4xl leading-[60px]">
            <span className="text-main leading-5">Nos especializamos</span> con
            expertos en fintech, tecnología, negocios, productos y operaciones.
          </h4>

          <div className="w-[80%] text-sm">
            <p>
              Algunas de las tecnologías en las que nos especializamos son:
              Javascript, Typescript, Node.js, NestJs, Ruby, React y React
              Native.
            </p>
          </div>
        </div>

        <div className="flex basis-12/12 md:basis-5/12 justify-center items-center">
          <img
            src="/code.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default Summary
