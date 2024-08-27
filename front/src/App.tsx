import { Navigate, Route, Routes } from "react-router-dom"
import Footer from "./pages/home/components/Footer"
import Navbar from "./pages/home/components/Navbar"
import HomePage from "./pages/home/HomePage"
import NotFoundPage from "./pages/notFound/NotFoundPage"
import AboutPage from "./pages/about/AboutPage"
import ContactPage from "./pages/contact/ContactPage"
// import ProjectsPage from "./pages/projects/ProjectsPage"
import ServicesPage from "./pages/services/ServicesPage"
import "./index.css"

function App() {
  return (
    <main className="font-poppins">
      <section className="your_css_selector_here w-full flex flex-col justify-center items-center min-h-screen">

        <Navbar />

        {/* <section className="w-full your_css_selector_here">
          <div
            id="sphere1"
            className="size-64 sm:size-80"
          ></div>
          <div
            id="sphere2"
            className="size-64 sm:size-80"
          ></div>
        </section> */}

        <div className="flex flex-1">
          <Routes>
            <Route path='/' element={ <HomePage /> } />
            <Route path='/about' element={ <AboutPage /> } />
            <Route path='/contact' element={ <ContactPage /> } />
            <Route path='/services' element={ <ServicesPage /> } />
            {/* <Route path='/projects' element={ <ProjectsPage /> } /> */}
            <Route path='/404' element={ <NotFoundPage /> } />
            <Route path="/*" element={ <Navigate to="/404" replace />} />
          </Routes>
        </div>

        <Footer />
      </section>
    </main>
  )
}

export default App