import Project from "../../../components/Project"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
const Projects = () => {
  const widthScreen = window.innerWidth
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1
  }
  return (
    <section className="flex flex-col w-full gap-4 p-8" id="projects">
      <h2 className="text-3xl font-bold">Proyectos</h2>
      <div className="w-[95%] mx-auto">
        <Slider {...settings} slidesToShow={widthScreen > 650 ? 3 : 1}>
        <Project />
        <Project />
        <Project />
        <Project />
        </Slider>

      </div>
    </section>
  )
}
export default Projects
