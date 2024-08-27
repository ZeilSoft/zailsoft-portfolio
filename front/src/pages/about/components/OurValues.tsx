import { Link } from "react-router-dom"
import Value from "../../../components/Value"

const OurValues = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[64px]">
      <div className="flex flex-col w-auto lg:w-[35%] gap-7 flex-shrink-0">
        <div className="flex flex-col gap-3">
          <h3 className="text-main text-[35px] lg:text-[45px] font-bold xl:whitespace-nowrap">
            Our values
          </h3>

          <p className="text-base lg:text-[20px] leading-[2.5rem]">
            Lorem ipsum dolor sit amet consesd adipisicing elit. Sapiente
            totam iste deserunt aliquid impedit, dolor modi at voluptates, qui
            iure natus cumque aut autem perspiciatis adipisci atque nulla dicta
            repellendus. Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>

        <div className="flex justify-start items-center">
          <Link to="/contact">
            <button className="py-4 px-12 rounded-md border border-[#cf485f] hover:bg-[#cf485f]/90 transition-colors duration-300">
              Contáctenos
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white bg-opacity-25 backdrop-filter shadow-md shadow-white p-[5%] lg:p-[60px] flex flex-col sm:flex-wrap sm:flex-row">
        <Value icon="fa-solid:lightbulb" text="Integridad" />
        <Value icon="fa-solid:lightbulb" text="Innovacion" />
        <Value icon="fa-solid:lightbulb" text="Mejora continua" />
        <Value icon="fa-solid:lightbulb" text="Trabajo en equipo" />
        <Value icon="fa-solid:lightbulb" text="Adaptabilidad" />
        <Value icon="fa-solid:lightbulb" text="Responsabilidad" />
      </div>
    </div>
  )
}
export default OurValues
