import { useTranslation } from "react-i18next";
import { ServicesItem } from "../../../components/ServicesItem"

const Services = () => {
  const {t} = useTranslation();

  return (
    <div className="flex flex-col justify-center items-center px-1 2xsm:px-[25px] md:px-8 -mt-[120px] sm:-mt-[163px] z-40">
      <div className="bg-main bg-opacity-20 backdrop-blur-2xl flex flex-col justify-center items-center max-w-[1280px] xl:w-[974px] rounded-3xl rounded-b-none transition-colors duration-150">
        <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-rows-3 p-[30px] lg:p-8 place-content-center">
          <ServicesItem
            title={t("web-development")}
            text={t("web-development-description")}
            border="border-r border-main border-opacity-80 lg:border-opacity-30 border-b"
            icon="bx:devices"
          />
          <ServicesItem
            title={t("mobile-development")}
            text={t("mobile-development-description")}
            border="border-l border-main border-opacity-80 lg:border-opacity-30 border-b"
            icon="ant-design:mobile-outlined"
          />
          <ServicesItem
            title={t("systems2")}
            text={t("systems2-description")}
            border="border-r border-main border-opacity-80 lg:border-opacity-30 border-t border-b"
            icon="hugeicons:system-update-02"
          />
          <ServicesItem
            title={t("ux/ui-design2")}
            text={t("ux/ui-design2-description")}
            border="border-l border-main border-opacity-80 lg:border-opacity-30 border-t border-b"
            icon="mdi:design"
          />
          <ServicesItem
            title={t("tech-review")}
            text={t("tech-review-description")}
            border="border-r border-main border-opacity-80 lg:border-opacity-30 border-t"
            icon="ic:outline-rate-review"
          />
          <ServicesItem
            title={t("support")}
            text={t("support-description")}
            border="border-l border-main border-opacity-80 lg:border-opacity-30 border-t"
            icon="icons8:support"
          />
        </div>
      </div>
    </div>
  )
}

export default Services