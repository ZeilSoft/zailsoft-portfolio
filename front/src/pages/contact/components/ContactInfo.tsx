import { Icon } from "@iconify/react/dist/iconify.js"
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-52 xl:gap-52">
        {/* Lets Colaborate */}
        <div className="flex flex-col w-full lg:w-auto xsm:flex-row xsm:items-center xsm:justify-center lg:flex-col lg:items-start gap-5">
          <div className="relative rounded-full bg-main w-[75px] h-[75px] p-4 lg:mt-[40px]">
            <Icon
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-light"
              icon="ant-design:message-filled"
              width="40"
              height="40"
            />
          </div>

          <h3 className="text-[40px] lg:text-[45px] font-bold xl:flex xl:flex-row xl:gap-2.5 transition-colors duration-150">
            <span className="block">{t("lets")}</span>
            <span className="block">{t("collaborate")}</span>
          </h3>
        </div>

        {/* Map */}
        <img
          // src="/mapDark.webp"
          src="/mapLight.webp"
          alt="map"
        />
      </div>
    </div>
  )
}

export default ContactInfo