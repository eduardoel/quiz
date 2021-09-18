import { useState } from "react"
import Button from "../components/Button"
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

  function timerOver() {
    if (question.answered) {
      setQuestion(question.replyWith(-1))
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Quiz value={question} 
        responseTime={5}
        onResponse={onResponse} 
        timerOver={timerOver}/>
      <Button text="Next" href="/result" />
    </div>
  )
}
