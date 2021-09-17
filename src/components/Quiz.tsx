import styles from '../styles/Quiz.module.css'
import QuestionModel from "../model/questionModel";
import Utterance from "./Utterance"

interface QuizProps {
    value: QuestionModel
}

export default function Quiz(props: QuizProps) {
    const question = props.value

    return(
        <div className={styles.quiz}>
            <Utterance text={question.utterance} />
        </div>
    )
}