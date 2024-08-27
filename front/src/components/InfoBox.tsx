import { Icon } from "@iconify/react/dist/iconify.js"
interface InfoBoxProps {
  icon: string
  text: string
}
const InfoBox = ({ icon, text }: InfoBoxProps) => {
  return (
    <div className="flex flex-col gap-3 items-center sm:justify-center sm:items-center rounded-md text-white text-center">
      <div className="bg-white bg-opacity-25 backdrop-filter shadow-md shadow-white p-5 rounded-lg">
        <Icon
          icon={icon}
          width="39"
          height="39"
          className="text-white"
        />
      </div>
      <span className="text-lg lg:text-[20px] font-semibold text-center max-w-[250px]">
        {text}
      </span>
    </div>
  )
}
export default InfoBox
