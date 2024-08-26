import { Icon } from "@iconify/react/dist/iconify.js"
interface InfoBoxProps {
  icon: string
  text: string
}
const InfoBox = ({ icon, text }: InfoBoxProps) => {
  return (
    <div className="flex gap-2 items-center sm:justify-center sm:items-center rounded-md w-52 h-16 text-white text-center ">
      <div className="p-4 rounded-lg bg-white shadow-md shadow-main">
        <Icon
          icon={icon}
          width="24"
          height="24"
          color="black"
        />
      </div>
      <span className="text-sm text-left">
        {text}
      </span>
    </div>
  )
}
export default InfoBox
