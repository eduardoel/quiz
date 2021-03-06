import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/questionModel";
import Utterance from "./Utterance"
import Answer from './Answer';
import Timer from './Timer';

const letters = [
    {value: 'A', color: '#F2C866'},
    {value: 'B', color: '#F266BA'},
    {value: 'C', color: '#85D4F2'},
    {value: 'D', color: '#BCE596'},
]
interface QuizProps {
    value: QuestionModel
    responseTime?: number
    onResponse: (indice: number) => void
    timerOver: () => void
}

export default function Quiz(props: QuizProps) {
    const question = props.value

    function renderAnswer() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={`${question.id}${i}`}
                    value={answer}
                    indice={i}
                    letter={letters[i].value}
                    letterBackgroundColor={letters[i].color}
                    onResponse={props.onResponse}
                />
            )
        })
    }

    return(
        <div className={styles.quiz}>
            <Utterance text={question.utterance} />
            <Timer key={question.id} duration={props.responseTime ?? 10} timerOver={props.timerOver} />
            {renderAnswer()}
        </div>
    )
}