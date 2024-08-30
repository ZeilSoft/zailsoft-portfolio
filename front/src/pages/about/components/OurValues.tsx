import { Link } from "react-router-dom"
import Value from "../../../components/Value"

const OurValues = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-[64px]">
      <div className="flex flex-col w-auto lg:w-[35%] gap-7 flex-shrink-0">
        <div className="flex flex-col gap-3 transition-colors duration-150">
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
            <button className="py-4 px-12 rounded-md border border-[#cf485f] bg-main hover:bg-main/80 text-light transition-colors duration-150">
              Contáctenos
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-main bg-opacity-25 backdrop-filter shadow-md shadow-main flex flex-col p-[5%] sm:flex-wrap sm:flex-row 
      lg:bg-transparent lg:gap-4 lg:p-0 lg:rounded-md lg:shadow-none lg:grid lg:grid-cols-6 xl:grid-cols-8 lg:grid-rows-3">
        <Value icon="fluent-mdl2:teamwork" text="Trabajo en equipo" randomClass="lg:bg-[#FF6F7D]" customClass="lg:flex-row lg:items-center lg:col-span-4 xl:col-span-6"/>
        <Value icon="fa-solid:lightbulb" text="Innovacion" randomClass="lg:bg-[#B3374A]" customClass="lg:flex-col-reverse lg:gap-3 lg:items-center lg:col-span-2" />
        
        <Value icon="material-symbols:self-improvement" text="Mejora continua" randomClass="lg:bg-[#E57384]" customClass="lg:flex-col lg:items-center lg:col-span-2" />
        <Value icon="material-symbols:balance" text="Integridad" randomClass="lg:bg-[#FF8A92]" customClass="lg:flex-row-reverse lg:items-center lg:col-span-4 xl:col-span-3" />

        <Value icon="mdi:head-cog-outline" text="Adaptabilidad" randomClass="lg:bg-[#F58A9C]" customClass="lg:flex-row lg:items-center lg:col-span-3"/>

        <Value icon="mdi:love" text="Empatia" randomClass="lg:bg-[#A92F47]" customClass="lg:hidden xl:flex lg:flex-col lg:items-center col-span-2" />
        <Value icon="fa-regular:handshake" text="Confianza" randomClass="lg:bg-[#FF6F7D]" customClass="lg:hidden xl:flex lg:flex-col-reverse lg:gap-3 lg:items-center col-span-2" />
        <Value icon="fa-solid:people-carry" text="Responsabilidad" randomClass="lg:bg-[#E57384]" customClass="lg:flex-col-reverse lg:gap-2 lg:items-center lg:col-span-3 xl:col-span-4"/>
      </div>
    </div>
  )
}
export default OurValues