import Navbar from "./pages/home/components/Navbar"
import HomePage from "./pages/home/HomePage"

function App() {
  return (
    <main className="font-poppins h-screen w-full relative flex justify-center">
      <div className="max-w-7xl flex flex-col w-full relative">

      <Navbar />
      <HomePage />
      <section className="w-full">
      <div id="sphere1" className="bg-red-900"></div>
      <div id="sphere2" className="bg-red-900 hidden xl:block"></div>
      </section>
        
      </div>
    </main>
  )
}

export default App
