import { ServicesItem } from "../../../components/ServicesItem"

export const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center px-1 2xsm:px-[25px] md:px-8 -mt-[163px] z-40">
      <div className="bg-white bg-opacity-20 backdrop-blur-2xl flex flex-col justify-center items-center max-w-[1280px] xl:w-[974px] rounded-3xl rounded-b-none text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-rows-3 p-[30px] lg:p-8 place-content-center">
          <ServicesItem border="border-r border-white border-opacity-15 border-b" />
          <ServicesItem border="border-l border-white border-opacity-15 border-b" />
          <ServicesItem border="border-r border-white border-opacity-15 border-t border-b" />
          <ServicesItem border="border-l border-white border-opacity-15 border-t border-b" />
          <ServicesItem border="border-r border-white border-opacity-15 border-t" />
          <ServicesItem border="border-l border-white border-opacity-15 border-t" />
        </div>
      </div>
    </div>
  )
}