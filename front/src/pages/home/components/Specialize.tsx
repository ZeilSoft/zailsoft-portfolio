const Specialize = () => {
  return (
    <div className="flex justify-center items-center text-white">
      <div className="flex flex-row gap-4 p-12 rounded-xl bg-main max-w-[800px]">
        <div className="flex flex-col basis-12/12 lg:basis-7/12 gap-8">
          <h2 className="text-3xl font-bold leading-8 text-center lg:text-left">
            Nos especializamos en la creacion de aplicaciones a medida
          </h2>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            doloremque nisi eveniet deserunt debitis autem a architecto minima
            aliquid animi enim non, alias possimus distinctio ab saepe sunt
            consequatur libero!
          </p>
        </div>
        <div className="justify-center items-center hidden lg:flex lg:basis-5/12">
          <img
            src="code.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}
export default Specialize
