import { useTranslation } from "react-i18next";
import Founder from "../../../components/Founder"

const OurFounders = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-main text-[35px] lg:text-[45px] font-bold text-center">
        {t("our-founders")}
      </h3>

      <div className="grid gap-14 sm:gap-x-0 lg:gap-7 xl:gap-14 grid-cols-1 sm:grid-cols-2 sm:w-[596px] sm:mx-auto xl:w-auto xl:mx-0 xl:grid-cols-3 justify-items-center place-items-center transition-colors duration-150">
        <Founder
          image="/founders/gabriel-nievas.webp"
          name="Gabriel Nievas"
          type={t("founder")}
        />
        <Founder
          image="/founders/santiago-herrera.webp"
          name="Santiago Herrera"
          type={t("founder")}
        />
        <Founder
          image="/founders/emiliano-gonzalez.webp"
          name="Emiliano Gonzalez"
          type={t("founder")}
        />
        <Founder
          image="/founders/nicolas-reyes.webp"
          name="Nicolas Reyes"
          type={t("founder")}
        />
        <Founder
          image="/founders/sergio-ferrari.webp"
          name="Sergio Ferrari"
          type={t("founder")}
        />
      </div>
    </div>
  )
}

export default OurFounders