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

    toObject() {
        return {
            id: this.#id,
            utterance: this.#utterance,
            answers: this.#answers.map(resp => resp.toObject()),
            right: this.#gotRight
        }
    }

}