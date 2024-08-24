import { Icon } from "@iconify/react/dist/iconify.js"

const Payments = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <h3 className="text-2xl font-bold">
        ¿De dónde viene nuestra{" "}
        <span className="text-main">Experiencia en pagos</span>?
      </h3>
      <div className="flex">
        <ul className="flex flex-col gap-4">
          <ListPayments
            title="Experiencia directa desde arriba:"
            description="Los fundadores con antecedentes establecidos en Pagos guían nuestras estrategias."
          />
          <ListPayments
            title="Mejora constante de fintech:"
            description="Nuestros ingenieros actualizan regularmente sus habilidades y todos los miembros del equipo asisten a eventos de fintech y pagos para mantenerse al tanto de las tendencias de la industria y ampliar sus perspectivas."
          />
          <ListPayments
            title="Enfoque colaborativo:"
            description="Fomentamos asociaciones dentro del ecosistema fintech, asegurando un enfoque holístico para la resolución de problemas."
          />
        </ul>
      </div>
    </div>
  )
}
export default Payments

function ListPayments({
  title,
  description
}: {
  title: string
  description: string
}) {
  return (
    <li className="flex items-center gap-2">
      <div>
        <Icon
          icon="flat-color-icons:ok"
          width="24"
          height="24"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm font-light">{description}</p>
      </div>
    </li>
  )
}
