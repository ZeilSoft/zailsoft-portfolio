import { Icon } from "@iconify/react/dist/iconify.js"
interface ValueProps {
  icon: string
  text: string
}
const Value = ({ icon, text }: ValueProps) => {
  return (
    <div className="flex justify-start items-center lg:my-5 w-1/2 p-[12px]">
      <div className="flex gap-5">
        <div className="flex justify-center items-center bg-main rounded-xl w-[60px] h-[60px] lg:w-[90px] lg:h-[90px]">
          <Icon
            icon={icon}
            width="24"
            height="24"
          />
        </div>
        <div className="flex justify-center items-center text-base whitespace-nowrap lg:text-lg font-medium">{text}</div>
      </div>
    </div>
  )
}
export default Value
