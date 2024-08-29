import { ServicesItem } from "../../../components/ServicesItem"

export const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center px-1 2xsm:px-[25px] md:px-8 -mt-[163px] z-40">
      <div className="bg-white bg-opacity-20 backdrop-blur-2xl flex flex-col justify-center items-center max-w-[1280px] xl:w-[974px] rounded-3xl rounded-b-none text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-rows-3 p-[30px] lg:p-8 place-content-center">
          <ServicesItem
            title="Desarrollo Web"
            text="We build your mobile apps and websites with highly scalable front-end and back-end technologies."
            border="border-r border-white border-opacity-15 border-b"
            icon="bx:devices"
          />
          <ServicesItem
            title="Desarrollo Mobile"
            text="We build your mobile apps and websites with highly scalable front-end and back-end technologies."
            border="border-l border-white border-opacity-15 border-b"
            icon="ant-design:mobile-outlined"
          />
          <ServicesItem
            title="Creación, actualización y mantenimiento de Sistemas"
            text="We build your mobile apps and websites with highly scalable front-end and back-end technologies."
            border="border-r border-white border-opacity-15 border-t border-b"
            icon="hugeicons:system-update-02"
          />
          <ServicesItem
            title="Diseño UI/UX"
            text="We create intuitive and visually appealing user interfaces and experiences that enhance engagement and satisfaction."
            border="border-l border-white border-opacity-15 border-t border-b"
            icon="mdi:design"
          />
          <ServicesItem
            title="Tech Review"
            text="A veces, necesitas una visión externa de tu plataforma. Asesoramos a empresas para optimizar su infraestructura tecnológica y adoptar nuevas soluciones de manera eficiente, escalable y segura."
            border="border-r border-white border-opacity-15 border-t"
            icon="ic:outline-rate-review"
          />
          <ServicesItem
            title="Technical Support and Maintenance"
            text="We offer ongoing support and technical maintenance to ensure the optimal functioning of your applications and systems."
            border="border-l border-white border-opacity-15 border-t"
            icon="icons8:support"
          />
        </div>
      </div>
    </div>
  )
}