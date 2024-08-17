import GithubIcon from "../utils/GithubIcon"
import LinkedinIcon from "../utils/LinkedinIcon"

interface TeamItemProps {
  name: string
  role: string
  image: string
  linkedin: string
  linkedinName: string
  github: string
  githubName: string
}
const TeamItem = ({
  name,
  role,
  image,
  linkedin,
  linkedinName,
  github,
  githubName
}: TeamItemProps) => {
  return (
    <div className="rounded-md w-full max-w-52 relative border border-main my-8 ">
      <div className="flex w-full justify-center absolute -top-14">
        <img
          className="h-20 w-20 rounded-full border-4 border-white"
          src={image}
          alt={name}
        />
      </div>
      <div className="flex flex-col pt-6 p-4 w-full">
        <h2 className="text-xl text-center font-bold">{name}</h2>
        <h3 className="text-main uppercase font-normal">{role}</h3>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <div className="w-[24px] flex justify-start items-center">
              <LinkedinIcon />
            </div>
            <a
              href={linkedin}
              className="font-light text-sm"
            >
              {linkedinName}
            </a>
          </div>
          <div className="flex gap-2">
            <div className="w-[24px] flex justify-start items-center">
              <GithubIcon />
            </div>
            <a
              href={github}
              className="font-light text-sm"
            >
              {githubName}
            </a>
          </div>
        </div>
        <span className="text-center">Fundador</span>
      </div>
    </div>
  )
}
export default TeamItem
