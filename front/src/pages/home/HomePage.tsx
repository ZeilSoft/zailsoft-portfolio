import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Projects from "./components/Projects"
import Questions from "./components/Questions"
import Team from "./components/Team"

const HomePage = () => {
  return (
    <div className="p-4 text-white flex flex-col gap-4">
      <Hero />
      <About />
      <Projects />
      <Team />
      <Questions />
      <Info />
      <Contact />
    </div>
  )
}
export default HomePage