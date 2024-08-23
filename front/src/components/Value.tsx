import { Icon } from "@iconify/react/dist/iconify.js"
interface ValueProps {
  icon: string
  text: string
}
const Value = ({ icon, text }: ValueProps) => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex w-56 gap-4">
        <div className="flex justify-center items-center bg-main rounded-lg p-4">
          <Icon
            icon={icon}
            width="24"
            height="24"
          />
        </div>
        <div className="flex justify-center items-center">{text}</div>
      </div>
    </div>
  )
}
export default Value
