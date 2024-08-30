import { Icon } from "@iconify/react/dist/iconify.js"

interface ServicesItemProps {
  border: string;
  title: string;
  text: string;
  icon: string
}

export const ServicesItem = ({border, title, text, icon}: ServicesItemProps) => {
  return (
    <div className={`flex gap-4 w-full items-center lg:items-start py-[19px] px-4 lg:p-[30px] ${border}`}>
      <div className="bg-main bg-opacity-25 backdrop-blur-2xl shadow-md shadow-main rounded-xl p-[15px] w-[71px] h-[71px] max-w-[71px] max-h-[71px] flex items-center justify-center">
        <Icon
          icon={icon}
          width="41"
          height="41"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-[18px] lg:text-lg font-semibold leading-none">{title}</h4>
        <p className="text-sm font-light w-[auto]">
          {text}
        </p>
      </div>
    </div>
  )
}
