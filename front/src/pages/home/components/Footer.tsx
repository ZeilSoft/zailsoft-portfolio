// import LinkedinIcon from "../../../utils/LinkedinIcon"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-[#0E100F] z-20 text-white w-full">
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-4 items-start justify-between mx-auto max-w-7xl w-full px-6 md:px-8 py-10">
        <div className="flex flex-col gap-2 mx-auto text-center lg:text-left lg:mx-0">
          <div className="flex flex-row justify-center items-center lg:justify-start gap-2">
            <Icon icon="ri:tailwind-css-fill" width="32" height="32" className="text-main"  />
            <h1 className="font-semibol text-xl">ZeilSoftLogo</h1>
          </div>
          <p className="text-base max-w-[342px]">{t("speech")}</p>
        </div>

        <div className="flex flex-col gap-8 mx-auto xsm:grid xsm:grid-cols-2 lg:flex lg:flex-row lg:mx-0 lg:gap-10 xl:gap-20">
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="font-semibold text-lg">{t("about-us")}</h3>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link 
                className="hover:underline hover:text-main transition-colors duration-150" 
                to="/home"
              >
                {t("home")}
              </Link>
              <Link 
                className="hover:underline hover:text-main transition-colors duration-150" 
                to="/about"
              >
                {t("about-us")}</Link>
              <Link 
                className="hover:underline hover:text-main transition-colors duration-150" 
                to="/contact"
              >
                {t("contact-us")}
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="font-semibold text-lg">{t("work")}</h3>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <Link 
                className="hover:underline hover:text-main transition-colors duration-150" 
                to="/services"
              >
                {t("services")}
              </Link>
              {/* <Link 
                className="hover:underline" 
                to="/projects"
              >
                Proyectos
              </Link> */}
            </div>
          </div>

          <div className="flex flex-col gap-3 items-center lg:items-start">
            <h3 className="font-semibold text-lg text-center lg:text-left">{t("talk-us")}</h3>
            <div className="flex flex-col items-center lg:items-start gap-2">
              <p>zeilsoftar@gmail.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-center lg:items-start">
            <h3 className="font-semibold text-lg">{t("follow-us")}</h3>
            <div className="flex flex-row gap-2 mx-auto">
              <Link
                to="https://www.linkedin.com/feed/"
                className="flex justify-center items-center shadow-lg shadow-main rounded-full p-[10px] w-10 h-auto hover:bg-main transition-all duration-300 hover:shadow-none"
                target="_blank"
              >
                <Icon icon="ri:linkedin-fill" className=" w-6" />
              </Link>
              {/* <div className="flex justify-center items-center shadow-lg shadow-main rounded-full p-[10px] w-10 h-auto">
                <Icon icon="ri:linkedin-fill" className=" w-6" />
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-8">
        <hr className="h-[0.5px] mb-4 bg-white border-0 "></hr>
        <div className="text-center font-semibold text-[15px]">
          {t("help")} <Link to="/contact" className="text-main hover:underline cursor-pointer">{t("talk-to")} {t("us")}.</Link>
        </div>
        <hr className="h-[0.5px] mt-4 bg-white border-0"></hr>
      </div>

      <div className="flex justify-center mx-auto p-[30px] text-sm text-center">
        {t("copyright")}
      </div>
    </div>
  )
}

export default Footer
