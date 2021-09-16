import AnswerModel from "./answerModel"

export default class QuestionModel {
    #id: number
    #utterance: string
    #answers: AnswerModel[]
    #right: boolean

    constructor(id: number, utterance: string, answers: AnswerModel[], right = false) {
        this.#id
        this.#utterance
        this.#answers
        this.#right
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

    get right() {
        return this.#right
    }

    get answered() {
        for(let answer of this.#answers) {
            if(answer.revealed) return true
        }
        return false
    }

}