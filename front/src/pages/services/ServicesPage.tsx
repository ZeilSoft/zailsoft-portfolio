import { Icon } from "@iconify/react/dist/iconify.js"
import ContactSection from "../../components/ContactSection"
import { Services } from "./components/Services"
import MainService from "./components/MainService"
import OptimizeOurWork from "./components/OptimizeOurWork"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"

const ServicesPage = () => {
  const {t} = useTranslation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="flex flex-col gap-16 max-w-7xl text-dark dark:text-light">
      <section className="flex flex-col items-center relative">
        <div className="bg-main bg-opacity-25 backdrop-filter pt-[80px] pb-[470px] absolute w-screen"></div>
        
        <div className="z-10 flex flex-col items-center relative pt-[50px] lg:pt-[67px] gap-3 h-[34.3rem]">
          <div className="bg-main bg-opacity-25 backdrop-blur-2xl shadow-lg shadow-main p-[25px] lg:p-[39px] rounded-full mb-[20px] transition-colors duration-150">
            <Icon
              icon="noto:rocket"
              width="57"
              height="57"
            />
          </div>

          <h2 className="text-[52px] lg:text-[62px] text-center font-bold leading-[55px] transition-colors duration-150">
            {t("our-main")} <span className="text-main">{t("service")}</span>
          </h2>

          <h3 className="text-center text-[20px] mt-0.5 transition-colors duration-150">{t("help")}</h3>
        </div>
        
        <Services />
      </section>

      <section className="px-6 md:px-8 max-w-7xl">
        <MainService />
      </section>

      <section className="px-6 md:px-8 max-w-7xl">
        <OptimizeOurWork />
      </section>
      
      <section className="px-6 md:px-8 pb-14 max-w-7xl">
        <ContactSection />
      </section>
    </div>
  )
}

export default ServicesPage
