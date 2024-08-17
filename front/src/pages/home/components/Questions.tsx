import Question from "../../../components/Question"

const Questions = () => {
  return (
    <div className="flex flex-col w-full gap-2">
      <h2 className="text-3xl font-bold">Preguntas Frecuentes</h2>
      <Question
        question="¿Que es ZeilSoft?"
        answer="Lorem ipsum"
      />
      <Question
        question="¿Que es ZeilSoft?"
        answer="Lorem ipsum"
      />
      <Question
        question="¿Que es ZeilSoft?"
        answer="Lorem ipsum"
      />
      <Question
        question="¿Que es ZeilSoft?"
        answer="Lorem ipsum"
      />
    </div>
  )
}
export default Questions
