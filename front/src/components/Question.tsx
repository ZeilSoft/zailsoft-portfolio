import { useState } from "react"

interface QuestionProps {
  question: string
  answer: string
}
const Question = ({ question, answer }: QuestionProps) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="flex flex-col w-full">
      <button
        className="w-full bg-[#0E100F] py-2 rounded-t-md"
        onClick={() => setOpen(!open)}
      >
        {question}
      </button>
      <p
        className={`${
          open ? "block" : "hidden"
        } bg-[#0E100F] p-2 pt-0  rounded-b-md`}
      >
        {answer}
      </p>
    </div>
  )
}
export default Question
