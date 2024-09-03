import { useEffect } from "react"
import ContactSection from "../../components/ContactSection"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Specialize from "./components/Specialize"
import Summary from "./components/Summary"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="flex flex-col gap-32 lg:gap-20 w-full max-w-7xl px-6 py-14 md:px-8 text-dark dark:text-light transition-colors duration-150">
      <section className="flex flex-col gap-16">
        <Hero />
        <Info />
      </section>

      <section className="">
        <Specialize />
      </section>

      <section className="flex flex-col gap-4 justify-center items-center font-semibold text-[26px] leading-[35px] lg:text-[33px]">
        {/* {t("mission")} */}
        <p className="text-center">{t("mission")}</p>
        <p className="text-center">{t("mission-description")}</p>
      </section>

      <section className="">
        <Summary />
      </section>

      <section className="">
        <Cards />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}
export default HomePage