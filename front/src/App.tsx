import Navbar from "./pages/home/components/Navbar"
import HomePage from "./pages/home/HomePage"

function App() {
  return (
    <main className="font-poppins h-screen w-full relative">
      <Navbar />
      <HomePage />
      <div id="sphere1"></div>
      <div id="sphere2"></div>
    </main>
  )
}

export default App
