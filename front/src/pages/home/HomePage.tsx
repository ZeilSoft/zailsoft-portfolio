import ContactSection from "../../components/ContactSection"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Specialize from "./components/Specialize"
import Summary from "./components/Summary"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-32 lg:gap-20 w-full max-w-7xl px-6 py-14 md:px-8">
      <section className="flex flex-col gap-16">
        <Hero />
        <Info />
      </section>

      <section className="">
        <Specialize />
      </section>

      <section className="text-white flex flex-col gap-4 justify-center items-center font-semibold text-[26px] leading-[35px] lg:text-[33px]">
        <p className="text-center">We have a clear mission:</p>
        <p className="text-center">Create products and services that generate an impact.</p>
      </section>

      <section className="">
        <Summary />
      </section>

      <section className="">
        <Cards />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}
export default HomePage
