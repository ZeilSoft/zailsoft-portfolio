import { useTranslation } from "react-i18next";
import InfoBox from "../../../components/InfoBox"

const Info = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center md:flex-row md:items-start md:justify-between">
      <InfoBox
        icon="bx:devices"
        text={t("web-app")}
        key={crypto.randomUUID()}
      />

      <InfoBox
        icon="ant-design:mobile-outlined"
        text={t("mobile-app")}
        key={crypto.randomUUID()}
      />

      <InfoBox
        icon="f7:rocket-fill"
        text={t("systems")}
        key={crypto.randomUUID()}
      />
      
      <InfoBox
        icon="mdi:design"
        text={t("ux/ui-design")}
        key={crypto.randomUUID()}
      />
    </div>
  )
}
export default Info
