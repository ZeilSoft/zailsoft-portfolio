import ContactSection from "../../components/ContactSection"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Specialize from "./components/Specialize"
import Summary from "./components/Summary"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 w-full pb-14 ">
      <section>
        <Hero />
        <Info />
      </section>

      <section className="px-8">
        <Specialize />
      </section>

      <section className="px-8">
        <Summary />
      </section>

      <section className="px-8">
        <Cards />
      </section>

      <section className="px-8">
        <ContactSection />
      </section>
    </div>
  )
}
export default HomePage
