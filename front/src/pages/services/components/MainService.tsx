import { useTranslation } from "react-i18next";

const MainService = () => {
  const {t} = useTranslation();
  
  return (
    <div className="text-dark dark:text-light flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-evenly transition-colors duration-150">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold max-w-[580px] lg:text-[30px] leading-[35px] lg:leading-[51px]">
          <span className="text-main">{t("we-specialize")}</span> {t("main-service-title")}
        </h3>
        
        <p className="text-base max-w-[580px] leading-[29px]">{t("main-service-description")}</p>
      </div>

      <img src="/services/work.svg" alt="Main service - Image" className="w-[352px] lg:w-[40%] lg:max-w-[436px]" />
    </div>
  )
}

export default MainService