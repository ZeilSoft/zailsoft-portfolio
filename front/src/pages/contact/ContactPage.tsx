import { useTranslation } from "react-i18next";
import ContactForm from "./components/ContactForm"
import ContactInfo from "./components/ContactInfo"
import ContactSocial from "./components/ContactSocial"

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="text-white flex flex-col gap-32 py-14 px-6 md:px-8">
      <section className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-[40px] lg:text-[55px] leading-tight font-bold text-center">
            {t("talk-to")} <strong className="text-main">{t("us")}</strong>
          </h2>

          <h2 className="text-lg font-medium text-center">
            {t("help")}
          </h2>
        </div>

        <ContactForm />
      </section>

      <section>
        <ContactInfo />
      </section>

      <section>
        <ContactSocial />
      </section>
    </div>
  )
}

export default ContactPage
