import { useState } from "react"
import Button from "../components/Button"
import Questionnaire from "../components/Questionnaire"
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

  function questionAnswered(question: QuestionModel) {

  }

  function nextGo() {

  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Questionnaire
        question={question}
        last={true}
        questionAnswered={questionAnswered}
        nextGo={nextGo}
      />
    </div>
  )
}
