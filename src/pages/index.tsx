import Quiz from "../components/Quiz"
import AnswerModel from "../model/answerModel"
import QuestionModel from "../model/questionModel"

export default function Home() {

  const quizTest = new QuestionModel(1, 'Best color?', [
    AnswerModel.wrong('Green'),
    AnswerModel.wrong('Blue'),
    AnswerModel.wrong('Red'),
    AnswerModel.certain('Black')
  ])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Quiz value={quizTest} />
    </div>
  )
}
