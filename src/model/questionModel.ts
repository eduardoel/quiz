import { shuffle } from "../functions/arrays"
import AnswerModel from "./answerModel"

export default class QuestionModel {
    #id: number
    #utterance: string
    #answers: AnswerModel[]
    #gotRight: boolean

    constructor(id: number, utterance: string, answers: AnswerModel[], gotRight = false) {
        this.#id = id
        this.#utterance = utterance
        this.#answers = answers
        this.#gotRight = gotRight;
    }

    get id() {
        return this.#id
    }

    get utterance() {
        return this.#utterance
    }

    get answers() {
        return this.#answers
    }

    get gotRight() {
        return this.#gotRight
    }

    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }
        return false
    }

    replyWith(indice: number): QuestionModel {
        const correct = this.#answers[indice]?.correct
        const answers = this.#answers.map((answers, i) => {
            const selectedAnswer = indice === i
            const needReveal = selectedAnswer || answers.correct
            return needReveal ? answers.reveal() : answers
        })
        return new QuestionModel(this.#id, this.#utterance, answers, correct)
    }

    scrambleAnswers() {
        let scrambledAnswers = shuffle(this.#answers)
        return new QuestionModel(this.#id, this.#utterance, scrambledAnswers, this.#gotRight)
    }

    toObject() {
        return {
            id: this.#id,
            utterance: this.#utterance,
            answered: this.answered,
            right: this.#gotRight,
            answers: this.#answers.map(resp => resp.toObject()),
        }
    }

}