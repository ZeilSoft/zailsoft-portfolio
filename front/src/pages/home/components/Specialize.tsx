const Specialize = () => {
  return (
    <div className="flex justify-center items-center text-white w-full">
      <div className="w-full">
        <div className="flex flex-row items-center justify-center gap-20 py-5 px-5 rounded-xl bg-main lg:flex-row-reverse">
          <div className="flex flex-col gap-5 text-center lg:text-left leading-[normal] max-w-[600px]">
            <h2 className="text-[24px] lg:text-[36px] font-extrabold lg:text-left">
              Nos especializamos en la creacion de aplicaciones a medida
            </h2>

            <p className="text-base lg:text-[20px] leading-[32px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              doloremque nisi eveniet deserunt debitis autem a architecto minima
              aliquid animi enim non, alias possimus distinctio ab saepe sunt
              consequatur libero!
            </p>
          </div>

          <img src="/home/sepecialize.svg" alt="How we optimize our work - Image" className="w-[352px] lg:w-[40%] lg:max-w-[400px] hidden lg:flex" />
        </div>
      </div>
    </div>
  )
}
export default Specialize
