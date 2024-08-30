import { Icon } from "@iconify/react/dist/iconify.js"

interface ValueProps {
  icon: string;
  text: string;
  customClass?: string;
  randomClass?: string;
}

const Value = ({ icon, text, customClass, randomClass }: ValueProps) => {
  return (
    <div className={`flex justify-start items-center p-[12px] w-1/2 ${randomClass} lg:bg-opacity-25 lg:backdrop-filter 
    lg:justify-center lg:border-none lg:p-3 xl:p-5 lg:rounded-md lg:w-auto lg:m-0 ${customClass} transition-colors duration-150`}> {/* Aplica la clase personalizada */}
      <div className={`flex flex-row gap-4 ${customClass}`}>
        <div className={`${randomClass} lg:bg-opacity-25 bg-opacity-25 backdrop-filter shadow-md shadow-main flex justify-center items-center rounded-xl w-[60px] h-[60px] lg:w-[60px] lg:h-[60px] lg:shadow-none`}>
          <Icon
            icon={icon}
            width="24"
            height="24"
          />
        </div>

        <p className="flex justify-center items-center text-base font-medium whitespace-nowrap lg:hyphenated-text lg:whitespace-normal lg:text-lg lg:text-center lg:leading-none">{text}</p>
      </div>
    </div>
  )
}
export default Value