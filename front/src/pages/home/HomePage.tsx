import ContactSection from "../../components/ContactSection"
import Cards from "./components/Cards"
import Hero from "./components/Hero"
import Info from "./components/Info"

const HomePage = () => {
  return (
    <div className="flex flex-col gap-16 w-full pb-14">
      <section>
        <Hero />
        <Info />
      </section>

      <section>
        <Cards />
      </section>

      <section>
        <ContactSection />
      </section>
    </div>
  )
}
export default HomePage
