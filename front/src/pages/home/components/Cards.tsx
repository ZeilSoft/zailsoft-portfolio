import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const Cards = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:justify-center gap-8">
      <Card
        icon="bx:devices"
        title="Desarrollo de Aplicaciones Web y Móviles"
        description="Construimos plataformas desde cero personalizadas para sus requisitos y operaciones de la empresa. Nuestro proceso incluye una consulta inicial para analizar sus necesidades, el desarrollo y la entrega de la plataforma y el soporte técnico posterior a la instalación."
        link="services"
      />
      <Card
        icon="f7:rocket-fill"
        title="Creación y Optimizacion de Sistemas"
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
  const {t} = useTranslation()

  return (
    <div className="bg-main bg-opacity-25 lg:h-[474px] backdrop-filter flex flex-col justify-between px-[30px] py-[49px] max-w-[497px] rounded-xl gap-8 text-dark dark:text-light">
      <div className="flex items-center justify-center gap-5 sm:gap-5 lg:gap-4">
        <Icon
          icon={icon}
          width="70"
          height="70"
          className="text-black dark:text-light transition-colors duration-150"
        />
        
        <h3 className="text-center font-semibold text-xl w-[135px] 2xsm:w-[154px] xsm:w-[154px] sm:w-auto leading-[30px] lg:text-[25px] lg:w-fit lg:max-w-[270px] transition-colors duration-150">
          {title}
        </h3>
      </div>

      <p className="text-sm text-center leading-[24px] lg:leading-[29px] lg:text-[16px] transition-colors duration-150">
        {description}
      </p>

      <div className="flex items-center justify-center">
        <Link to={link}>
          <button className="transition-colors duration-150 border border-main hover:bg-main hover:text-light font-medium py-[11px] px-[35px] rounded-md">
            {t("see-more")}
          </button>
        </Link>
      </div>
    </div>
  )
}