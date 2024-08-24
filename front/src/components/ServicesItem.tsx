import { Icon } from "@iconify/react/dist/iconify.js"
interface ServicesItemProps {
    border: string
}
export const ServicesItem = ({border}: ServicesItemProps) => {
  return (
    <div className={`flex gap-4 w-full p-4 ${border}`}>
      <div className="bg-main rounded-xl p-2 size-[56px]">
        <Icon
          icon="noto:rocket"
          width="40"
          height="40"
        />
      </div>

      <div className="flex flex-col gap-2 ">
        <h4>Desarrollo de software</h4>
        <p className="text-sm font-extralight">
          We build your mobile apps and websites with highly scalable front-end
          and back-end technologies.
        </p>
      </div>
    </div>
  )
}
