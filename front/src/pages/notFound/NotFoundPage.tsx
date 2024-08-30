import { Icon } from "@iconify/react/dist/iconify.js"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen text-black dark:text-white">
      <Icon
        icon="system-uicons:cloud-disconnect"
        width="100"
        height="100"
      />
      <h1 className="text-4xl font-bold text-center">404 - {t("not-found")}</h1>
      <p className="text-xl text-muted-foreground text-center">
        {t("not-found-description")}
      </p>
      <Link
        className="text-[17.5px] font-semibold"
        to="/"
      >
        <button className="flex  items-center justify-center gap-2 py-2.5 px-6 rounded-md bg-main hover:bg-main/80 text-light transition-colors duration-150">
          <Icon
            icon="formkit:arrowleft"
            width="24"
            height="24"
          />
          {t("not-found-button")}
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage
