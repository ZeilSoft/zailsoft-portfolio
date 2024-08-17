import Contact from "./components/Contact"
import Header from "./components/Header"
import Questions from "./components/Questions"

const HomePage = () => {
  return (
    <div className="p-4 text-white flex flex-col gap-4">
      <Header />
      <Questions />
      <Contact />
    </div>
  )
}
export default HomePage