import { Icon } from "@iconify/react/dist/iconify.js"

const ContactSocial = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full justify-around">
      <div className="flex items-center gap-2">
        <Icon
          icon="mdi:location"
          width="36"
          height="36"
        />
        <div className="flex flex-col">
          <span>Buenos Aires, Argentina</span>
          <span>Córdoba, Argentina</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Icon
          icon="carbon:email"
          width="36"
          height="36"
        />
        <span>zeilsoftar@gmail.com</span>
      </div>
    </div>
  )
}
export default ContactSocial
