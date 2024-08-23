interface FounderProps {
    image: string
    name: string
    type: string
}
const Founder = ({image, name, type} : FounderProps) => {
  return (
    <div className="flex flex-col w-64">
      <img src={image} alt={name + `image`} className="filter grayscale hover:filter-none transition duration-300 hover:scale-105" />  
      <h3 className="text-xl font-light">{type}</h3>
      <h3 className="text-xl font-bold">{name}</h3>
    </div>
  )
}
export default Founder