// import { Icon } from "@iconify/react/dist/iconify.js"

// const ContactSocial = () => {
//   return (
//     <div className="flex flex-col lg:flex-row gap-4 w-fit mx-auto lg:mx-0 lg:w-full justify-between text-[17px] md:text-[20px]">
//       <div className="flex items-center gap-5 lg:gap-3">
//         <Icon
//           icon="mdi:location"
//           width="36"
//           height="36"
//         />

//         <div className="flex flex-col">
//           <span>Buenos Aires, Argentina</span>
//           <span>Córdoba, Argentina</span>
//         </div>
//       </div>

//       <div className="flex items-center gap-[23px] lg:gap-5">
//         <Icon
//           className="ml-[2.5px] lg:ml-0"
//           icon="bi:linkedin"
//           width="30"
//           height="30"
//         />
//         <span>ZeilSoft</span>
//       </div>

//       <div className="flex items-center gap-5">
//         <Icon
//           icon="carbon:email"
//           width="36"
//           height="36"
//         />

//         <span>zeilsoftar@gmail.com</span>
//       </div>
//     </div>
//   )
// }
// export default ContactSocial

import { Icon } from "@iconify/react/dist/iconify.js"

const ContactSocial = () => {
  return (
    <div className="text-[17px] flex flex-col gap-4 w-fit mx-auto justify-between sm:w-[600px] sm:flex-row sm:flex-wrap sm:gap-x-10 sm:justify-center lg:justify-between lg:flex-row lg:mx-0 lg:w-full sm:text-[20px] transition-colors duration-150">
      <div className="flex items-center gap-5 lg:gap-3">
        <Icon
          className="lg:-ml-1.5"
          icon="mdi:location"
          width="36"
          height="36"
        />

        <div className="flex flex-col">
          <span>Buenos Aires, Argentina</span>
          <span>Córdoba, Argentina</span>
        </div>
      </div>

      <div className="flex items-center gap-[23px] lg:gap-5">
        <Icon
          className="ml-[2.5px] lg:ml-0"
          icon="bi:linkedin"
          width="30"
          height="30"
        />
        <span>ZeilSoft</span>
      </div>

      <div className="flex items-center gap-5">
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