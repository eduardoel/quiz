import { useEffect, useState } from "react"
import Questionnaire from "../components/Questionnaire"
import QuestionModel from "../model/questionModel"
import { useRouter } from "next/router"

const BASE_URL = 'http://localhost:3000/api'

export default function Home() {
  const router = useRouter()

  const [questionIds, setQuestionIds] = useState<number[]>([])
  const [question, setQuestion] = useState<QuestionModel>()
  const [correctAnswer, setCorrectAnswer] = useState<number>(0)

  async function loadQuestionsIds() {
    const resp = await fetch(`${BASE_URL}/questionnaire`)
    const questionIds = await resp.json()
    setQuestionIds(questionIds)
  }

  async function loadQuestion(questionId: number) {
    const resp = await fetch(`${BASE_URL}/questions/${questionId}`)
    const json = await resp.json()
    const newQuestion = QuestionModel.createUsingObject(json)
    setQuestion(newQuestion)
  }

  useEffect(() => {
    loadQuestionsIds()
  }, [])

  useEffect(() => {
    questionIds.length > 0 && loadQuestion(questionIds[0])
  }, [questionIds])

  function questionAnswered(questionAnswered: QuestionModel) {
    setQuestion(questionAnswered)
    const gotRight = questionAnswered.gotRight
    setCorrectAnswer(correctAnswer + (gotRight ? 1 : 0))
  }

  function idNextQuery() {
      const nextIndice = questionIds.indexOf(question.id) + 1
      return questionIds[nextIndice]
  }

  function nextGo() {
    const nextId = idNextQuery()
    nextId ? nextQuestion(nextId) : finish()
  }

  function nextQuestion(nextId: number) {
    loadQuestion(nextId)
  }

  function finish() {
    router.push({
      pathname: "/result",
      query: {
        total: questionIds.length,
        correct: correctAnswer
      }
    })
  }

  return question ? (
      <Questionnaire
        question={question}
        last={idNextQuery() === undefined}
        questionAnswered={questionAnswered}
        nextGo={nextGo}
      />
  ) : false
}
