import Founder from "../../../components/Founder"

const OurFounders = () => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between">
      <Founder
        image="/founders/gabriel-nievas.webp"
        name="Gabriel Nievas"
        type="Fundador"
      />
      <Founder
        image="/founders/santiago-herrera.webp"
        name="Santiago Herrera"
        type="Fundador"
      />
      <Founder
        image="/founders/emiliano-gonzalez.webp"
        name="Emiliano Gonzalez"
        type="Fundador"
      />
      <Founder
        image="/founders/nicolas-reyes.webp"
        name="Nicolas Reyes"
        type="Fundador"
      />
    </div>
  )
}
export default OurFounders
