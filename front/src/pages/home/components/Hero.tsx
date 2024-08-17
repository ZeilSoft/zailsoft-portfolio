const Hero = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 w-full p-8">
      <div className="flex flex-col m-auto w-full gap-4">
        <h1 className="text-5xl font-bold">ZeilSoft</h1>
        <p className="font-light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
          quia culpa beatae maxime odit eaque iste consequatur aut voluptas
          porro optio nisi quasi, sunt nam labore blanditiis deserunt error
          distinctio.
        </p>
        <div>
          <button className="py-2 px-4 rounded-md bg-main hover:bg-main/90">
            <a href="#contact">Contacto</a>
          </button>
        </div>
      </div>
      <div className="flex w-full m-auto lg:p-10">
        <img
        className="rounded-md"
          src="/code.jpg"
          alt="code"
        />
      </div>
    </section>
  )
}
export default Hero
