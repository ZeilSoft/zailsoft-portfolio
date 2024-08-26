import { ServicesItem } from "../../../components/ServicesItem"

export const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center px-1 2xsm:px-[25px] md:px-8 -mt-[163px] z-40">
      <div className="flex flex-col justify-center items-center max-w-[1280px] xl:w-[974px] bg-white rounded-3xl rounded-b-none">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-rows-3 p-[30px] lg:p-8 place-content-center shadow-[#374151] shadow-xl">
          <ServicesItem border="border-r border-b" />
          <ServicesItem border="border-l border-b" />
          <ServicesItem border="border-r border-t border-b" />
          <ServicesItem border="border-l border-t border-b" />
          <ServicesItem border="border-r border-t" />
          <ServicesItem border="border-l border-t" />
        </div>
      </div>
    </div>
  )
}
