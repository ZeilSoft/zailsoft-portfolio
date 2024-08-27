import { Icon } from "@iconify/react/dist/iconify.js"

interface ServicesItemProps {
  border: string
}

export const ServicesItem = ({border}: ServicesItemProps) => {
  return (
    <div className={`flex gap-4 w-full items-center lg:items-start py-[19px] px-4 lg:p-[30px] ${border}`}>
      <div className="bg-white bg-opacity-25 backdrop-blur-2xl shadow-md shadow-white rounded-xl p-[15px] w-[71px] h-[71px] max-w-[71px] max-h-[71px] flex items-center justify-center">
        <Icon
          icon="noto:rocket"
          width="41"
          height="41"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-[18px] lg:text-lg font-semibold leading-none">Desarrollo de software</h4>
        <p className="text-sm font-light w-[auto] ">
          We build your mobile apps and websites with highly scalable front-end
          and back-end technologies.
        </p>
      </div>
    </div>
  )
}
