interface FounderProps {
    image: string
    name: string
    type: string
}

const Founder = ({image, name, type} : FounderProps) => {
  return (
    <div className="flex flex-col gap-4 w-56 lg:w-64">
      <img src={image} alt={name + `image`} className="shadow-main shadow-xl hover:shadow-none rounded-full filter grayscale hover:filter-none transition duration-300 hover:scale-105" />
      <div className="flex flex-col gap-1">
        <h3 className="text-base lg:text-lg font-bold text-main text-center">{type}</h3>
        <h3 className="text-lg lg:text-xl font-semibold text-center">{name}</h3>
      </div>
    </div>
  )
}
export default Founder