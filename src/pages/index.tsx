import { useState } from "react"
import Quiz from "../components/Quiz"
import AnswerModel from "../model/answerModel"
import QuestionModel from "../model/questionModel"

const quizTuck = new QuestionModel(1, 'Best color?', [
  AnswerModel.wrong('Green'),
  AnswerModel.wrong('Blue'),
  AnswerModel.wrong('Red'),
  AnswerModel.certain('Black')
])

export default function Home() {

  const [question, setQuestion] = useState(quizTuck)

  function onResponse(indice: number) {
    setQuestion(question.replyWith(indice))
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Quiz value={question} onResponse={onResponse} />
    </div>
  )
}
