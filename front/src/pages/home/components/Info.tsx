import InfoBox from "../../../components/InfoBox"

const Info = () => {
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center md:flex-row md:items-start md:justify-between">
      <InfoBox
        icon="ant-design:mobile-outlined"
        text="Desarrollo de Aplicaciones Móviles"
        key={crypto.randomUUID()}
      />

      <InfoBox
        icon="bx:devices"
        text="Desarrollo de Aplicaciones Web"
        key={crypto.randomUUID()}
      />
      
      <InfoBox
        icon="f7:rocket-fill"
        text="Creación y Optimizacion de Sistemas"
        key={crypto.randomUUID()}
      />
    </div>
  )
}
export default Info
