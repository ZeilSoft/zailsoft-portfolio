import { Icon } from "@iconify/react/dist/iconify.js"
import DashedCurve from "../../../utils/dashed-curve"
import { useTranslation } from "react-i18next";

const Summary = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  return (
    <div className={`flex flex-col w-full text-black dark:text-light transition-colors duration-150 relative gap-16 ${isSpanish ? 'xl:gap-[116px]' : 'xl:gap-[106px]'}`}>
      <div className="absolute w-[55%] top-[-64px] left-[-13px] z-10 hidden xl:block">
        <DashedCurve />
      </div>  

      {/* First */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="formkit:people"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">{t("who-we-are")}</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] xl:max-w-[80%]">
            <span className="text-main">{t("multidisciplinary-team")}</span> {t("who-title")}
          </h4>

          <div className="text-base leading-[27px] xl:max-w-[70%]">
            <p>
              {t("who-description")}
            </p>
          </div>
        </div>

        <img src="/home/team.png" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>

      {/* Second */}
      <div className="flex flex-col items-center md:flex-row-reverse gap-4 xl:gap-[185px] z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="fa6-solid:face-smile"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">{t("our-approach")}</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] lg:max-w-[80%]">
            <span className="text-main">{t("deliver")}</span> {t("approach-title")}
          </h4>

          <p className="text-base leading-[27px] lg:max-w-[80%]">
            {t("approach-description")}
          </p>
        </div>

        <img src="/home/software.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>

      {/* Third */}
      <div className="flex flex-col items-center md:flex-row gap-4 z-20">
        <div className="flex flex-col gap-5">
          <div className="flex flex-row items-center gap-6">
            <div className="p-[17px] bg-main rounded-full">
              <Icon
                icon="streamline:desktop-code"
                width="24"
                height="24"
                className="text-light"
              />
            </div>

            <h3 className="text-[17px]">{t("our-technologies")}</h3>
          </div>

          <h4 className="text-[26px] leading-[1.3] font-semibold lg:text-[30px] lg:leading-[51px] lg:max-w-[80%]">
            <span className="text-main leading-5">{t("we-specialize")}</span> {t("technologies-title")}
          </h4>

          <p className="text-base leading-[27px] lg:max-w-[70%]">
            {t("technologies-description")}
          </p>
        </div>

        <img src="/home/tech.webp" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] lg:flex" />
      </div>
    </div>
  )
}

export default Summary