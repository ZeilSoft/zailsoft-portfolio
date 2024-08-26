import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="flex flex-col gap-2 pt-20 items-center justify-center w-full h-[550px] text-white bg-blue-600">
      <h1 className="text-[50px] lg:text-[64px] font-bold text-center">
        Empoderar a la Revolución Fintech, juntos.
      </h1>
      <Link to="contact" className="py-2 px-4 rounded-md bg-main hover:bg-main/90">
        Contactanos
      </Link>
     
    </section>
  )
}
export default Hero
