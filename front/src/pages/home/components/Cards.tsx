import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const Cards = () => {
  return (
    <div className="flex flex-col items-center md:flex-row justify-around mx-auto w-full gap-8">
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
    <div className="group">
      <Link
        to={link}
        className="flex flex-col p-6 bg-white max-w-[400px] rounded-xl shadow-md shadow-white gap-8 duration-700 group-hover:bg-main"
      >
        <div className="flex items-center gap-4">
          <Icon
            icon={icon}
            width="80"
            height="80"
            className="text-main duration-700 group-hover:text-white"
          />
          <h3 className="font-bold text-xl duration-700 group-hover:text-white">{title}</h3>
        </div>
        <div>
          <p className="text-sm text-center leading-7 duration-700 group-hover:text-white">{description}</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-main py-2 px-4 text-white rounded-md duration-700 group-hover:bg-white group-hover:text-main">
            <Link to={link}>Ver más</Link>
          </button>
        </div>
      </Link>
    </div>
  )
}
