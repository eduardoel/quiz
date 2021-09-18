import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/questionModel";
import Utterance from "./Utterance"
import Answer from './Answer';
import Timer from './timer';

const letters = [
    {value: 'A', color: '#F2C866'},
    {value: 'B', color: '#F266BA'},
    {value: 'C', color: '#85D4F2'},
    {value: 'D', color: '#BCE596'},
]
interface QuizProps {
    value: QuestionModel
    onResponse: (indice: number) => void
    timerOver: () => void
}

export default function Quiz(props: QuizProps) {
    const question = props.value

    function renderAnswer() {
        return question.answers.map((answer, i) => {
            return (
                <Answer
                    key={i}
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
            <Timer duration={10} timerOver={props.timerOver} />
            {renderAnswer()}
        </div>
    )
}