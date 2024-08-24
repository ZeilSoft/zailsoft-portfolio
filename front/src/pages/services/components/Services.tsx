import { ServicesItem } from "../../../components/ServicesItem"

export const Services = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center max-w-[800px] -translate-y-60 transition-transform bg-white rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 p-4 place-content-center">
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
