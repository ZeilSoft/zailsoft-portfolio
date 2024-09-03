import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="flex flex-col items-center justify-between lg:flex-row gap-6 w-full">
      <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
        <h1 className="text-[45px] lg:text-[70px] leading-none font-bold">
          ZeilSoft
        </h1>

        <p className="max-w-[682px] text-base leading-[30px] text-center lg:text-left lg:text-[18px] lg:leading-[35px]">
          {t("hero")}
        </p>

        <Link
          className="text-[17.5px] font-semibold"
          to="/contact"
        >
          <button className="py-2.5 px-6 rounded-md bg-main hover:bg-main/80 text-light transition-colors duration-150">
            {t("contact-us2")}
          </button>
        </Link>
      </div>

      <img
        className="w-[352px] lg:w-[40%]"
        src="/home/hero.svg"
        alt="Hero - Image"
      />
    </section>
  )
}
export default Hero
