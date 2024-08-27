import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-between lg:flex-row gap-6 w-full text-white">
      <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
        <h1 className="text-[45px] lg:text-[70px] leading-none font-bold">ZeilSoft</h1>

        <p className="max-w-[682px] text-base leading-[30px] text-center lg:text-left lg:text-[18px] lg:leading-[35px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          quia culpa beatae maxime odit eaque iste consequatur aut voluptas
          porro optio nisi quasi, sunt nam labore blanditiis deserunt error
          distinctio.
        </p>

        <button className="py-2.5 px-6 rounded-md bg-main hover:bg-main/80 transition-colors duration-300">
          <Link className="text-[17.5px] font-semibold" to="/contact">Contacto us</Link>
        </button>
      </div>

      <img
        className="w-[352px] lg:w-[40%]"
        src="/home/hero.svg"
        alt="Hero - Image"
      />
    </section>
  )
}
export default Hero