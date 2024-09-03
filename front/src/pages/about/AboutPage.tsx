import { useEffect } from "react"
import ContactSection from "../../components/ContactSection"
import OurFounders from "./components/OurFounders"
import OurValues from "./components/OurValues"
import { useTranslation } from "react-i18next"

const AboutPage = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="text-black dark:text-light flex flex-col gap-20 py-14 px-6 md:px-8 max-w-7xl">
      <section className="flex flex-col gap-4 transition-colors duration-150">
        <h1 className="text-[50px] lg:text-[64px] font-bold text-main">
          {t("about-us2")}
        </h1>

        <h2 className="text-[30px] lg:text-[40px] font-medium w-auto md:w-[640px]">
          {t("about-us2-title")} <strong className="text-main">{t("team")}</strong>
        </h2>

        <p className="text-lg w-auto lg:w-2/3 leading-[2.5rem]">
          {t("about-us2-description")}
        </p>
      </section>

      <section className="flex flex-col gap-6 transition-colors duration-150">
        <h3 className="text-[35px] lg:text-[45px] font-bold text-main leading-none">
          {t("culture-title")}
        </h3>

        <p className="text-base lg:text-[20px] w-auto leading-[2.5rem]">
          {t("culture-description")}
        </p>
      </section>

      <section>
        <OurValues />
      </section>

      <section>
        <OurFounders />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}

export default AboutPage