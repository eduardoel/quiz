import questions from '../questionsDatabase'

export default function questionsById (req, res) {
    const idSelected = +req.query.id

    const singleQuestion = questions.filter(question => question.id === idSelected)

    if(singleQuestion.length === 1) {
        const questionSelected = singleQuestion[0].scrambleAnswers()
        res.status(200).json(questionSelected.toObject())
    } else {
        res.status(204).send()
    }
}