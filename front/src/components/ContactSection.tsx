import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const ContactSection = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-main bg-opacity-25 backdrop-filter flex lg:flex-row flex-col rounded-xl gap-8 items-center justify-between p-[30px] lg:gap-0 lg:py-[50px] lg:px-[100px] text-black dark:text-light lg:max-w-[1216px] xl:w-[1216px] transition-colors duration-150">
      <div className="flex flex-col">
        <div className="flex flex-col gap-3 lg:w-[500px]">
          <h3 className="text-xl text-main/80 lg:text-[29px] font-bold">{t("talk")}</h3>

          <h4 className="text-[30px] 2xsm:text-[35px] xsm:text-[40px] lg:text-[64px] font-bold">
            {t("work-together")}
          </h4>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <Link
          to="/contact"
          className="bg-main hover:bg-main/80 text-light transition-colors duration-150 py-5 px-[30px] font-semibold rounded-lg text-xl xsm:px-[50px] lg:text-2xl"
        >
          {t("contact-us")}
        </Link>
      </div>
    </section>
  )
}

export default ContactSection