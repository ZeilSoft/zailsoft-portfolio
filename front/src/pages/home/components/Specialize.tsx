import { useTranslation } from "react-i18next";

const Specialize = () => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-center items-center text-dark dark:text-light w-full transition-colors duration-150">
      <div className="w-full">
        <div className="bg-main bg-opacity-25 dark:bg-main dark:bg-opacity-25 dark:backdrop-filter flex flex-row items-center justify-center gap-20 py-5 px-5 rounded-xl lg:flex-row-reverse">
          <div className="flex flex-col gap-5 text-center lg:text-left leading-[normal] max-w-[600px]">
            <h2 className="text-[24px] lg:text-[36px] font-extrabold lg:text-left">
              {t("specialize")}
            </h2>

            <p className="text-base lg:text-[20px] leading-[32px]">
              {t("specialize-description")}
            </p>
          </div>

          <img src="/home/sepecialize.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] hidden lg:flex" />
        </div>
      </div>
    </div>
  )
}

export default Specialize