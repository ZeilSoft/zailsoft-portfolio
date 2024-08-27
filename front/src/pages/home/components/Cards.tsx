import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-8">
      <Card
        icon="bx:devices"
        title="Desarrollo de Aplicaciones Web y Móviles"
        description="Construimos plataformas desde cero personalizadas para sus requisitos y operaciones de la empresa. Nuestro proceso incluye una consulta inicial para analizar sus necesidades, el desarrollo y la entrega de la plataforma y el soporte técnico posterior a la instalación."
        link="services"
      />
      <Card
        icon="f7:rocket-fill"
        title="Alto rendimiento"
        description="Construimos plataformas desde cero personalizadas para sus requisitos y operaciones de la empresa. Nuestro proceso incluye una consulta inicial para analizar sus necesidades, el desarrollo y la entrega de la plataforma y el soporte técnico posterior a la instalación."
        link="services"
      />
    </div>
  )
}
export default Cards

interface CardProps {
  icon: string
  title: string
  description: string
  link: string
}

function Card({ icon, title, description, link }: CardProps) {
  return (
    // <div className="group">
      <div className="flex flex-col px-[30px] py-[49px] bg-white max-w-[497px] rounded-xl gap-8 duration-300 group-hover:bg-main">
        <div className="flex items-center justify-center gap-5 sm:gap-5 lg:gap-4">
          <Icon
            icon={icon}
            width="70"
            height="70"
            className="text-main duration-300 group-hover:text-white"
          />
          
          <h3 className="text-center font-semibold text-xl w-[135px] 2xsm:w-[154px] xsm:w-[154px] sm:w-auto leading-[30px] duration-300 group-hover:text-white lg:text-[25px] lg:line-clamp-2 lg:w-fit lg:max-w-[270px]">
            {title}
          </h3>
        </div>

        <p className="text-sm text-center leading-[24px] lg:leading-[29px] lg:text-[16px] duration-300 group-hover:text-white">
          {description}
        </p>

        <div className="flex items-center justify-center">
          <Link to={link}>
            <button className="bg-main hover:bg-main/80 font-medium py-[11px] px-[35px] text-white rounded-md duration-300 group-hover:bg-white group-hover:text-main">
              Ver más
            </button>
          </Link>
        </div>
      </div>
    // </div>
  )
}
