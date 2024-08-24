import Founder from "../../../components/Founder"

const OurFounders = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-main text-[35px] lg:text-[45px] font-bold text-center">
        Our Founders
      </h3>

      <div className="grid gap-14 sm:gap-x-0 lg:gap-7 xl:gap-14 grid-cols-1 sm:grid-cols-2 sm:w-[596px] sm:mx-auto xl:w-auto xl:mx-0 xl:grid-cols-4 justify-items-center">
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
    </div>
  )
}
export default OurFounders
