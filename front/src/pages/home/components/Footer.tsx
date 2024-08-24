// import LinkedinIcon from "../../../utils/LinkedinIcon"

import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-[#0E100F] z-20 text-white w-full">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 items-start justify-between mx-auto max-w-7xl w-full px-6 md:px-8 py-10">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibol text-xl">ZeilSoftLogo</h1>
          <p className="text-base max-w-[342px]">Empowering the Fintech Revolution, together.</p>
        </div>

        <div className="flex flex-col mx-auto xsm:mx-auto xsm:grid xsm:grid-cols-2 gap-8 lg:flex-row lg:gap-20">
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">About</h3>
            <div className="flex flex-col gap-2">
              <p>Home</p>
              <p>¿Quienes somos?</p>
              <p>Contacto</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Work</h3>
            <div className="flex flex-col gap-2">
              <p>Services</p>
              <p>Proyectos</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-lg">Habla con nosotros!</h3>
            <div className="flex flex-col gap-2">
              <p>zeilsoftar@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-semibold text-lg">Follow us</h3>
            <div className="flex flex-row gap-2">
              <div className="flex justify-center items-center shadow-lg shadow-main rounded-full p-[10px] w-10 h-auto">
                <Icon icon="ri:linkedin-fill" className=" w-6" />
              </div>
              <div className="flex justify-center items-center shadow-lg shadow-main rounded-full p-[10px] w-10 h-auto">
                <Icon icon="ri:linkedin-fill" className=" w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <hr className="h-px mb-4 bg-white border-0 "></hr>
        <div className="text-center font-semibold text-base">
          ¿Te podemos ayudar? <Link to="/contact" className="text-[#374151] hover:underline cursor-pointer">Contactate con nosotros!</Link>
        </div>
        <hr className="h-px mt-4 bg-white border-0"></hr>
      </div>

      <div className="flex justify-center mx-auto p-[30px] text-sm text-center">
        Copyright © 2024 ZeilSoft. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
