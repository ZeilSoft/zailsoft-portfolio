import InfoBox from "../../../components/InfoBox"

const Info = () => {
  return (
    <div className="flex flex-row items-start justify-around mx-auto w-full border-b border-white py-8">
      <InfoBox
        icon="bx:devices"
        text="Desarrollo de Aplicaciones Web y Móviles"
        key={crypto.randomUUID()}
      />
      <InfoBox
        icon="f7:rocket-fill"
        text="Rendimiento"
        key={crypto.randomUUID()}
      />
    </div>
  )
}
export default Info
