import { Icon } from "@iconify/react/dist/iconify.js"

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0">
        <div className="flex flex-col basis-1/2 gap-4">
          <div>
            <div className="flex items-center justify-center rounded-full bg-main w-16 h-16">
              <Icon
                icon="ant-design:message-filled"
                width="32"
                height="32"
                color="white"
              />
            </div>
          </div>
          <h3 className="text-3xl">Vamos a colaborar</h3>
        </div>
        <div className="flex basis-1/2">
          <img
            src="/map.webp"
            alt="map"
          />
        </div>
      </div>
    </div>
  )
}
export default ContactInfo
