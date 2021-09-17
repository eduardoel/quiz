import styles from "../styles/Answer.module.css"
import AnswerModel from "../model/answerModel";

interface AnswerProps {
    value: AnswerModel
    indice: number
    letter: string
    letterBackgroundColor: string
    onResponse: (indice: number) => void
}

export default function Answer(props: AnswerProps) {

    const answer = props.value

    return (
        <div className={styles.answer}
            onClick={() => props.onResponse(props.indice)}>
            <div className={styles.answerContent}>
                {!answer.revealed ? (
                    <div className={styles.answerFront}>
                        <div className={styles.letter}
                            style={{ backgroundColor: props.letterBackgroundColor }}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.value}
                        </div>
                    </div>
                ) : (
                    <div className={styles.answerBack}>
                        {answer.correct ? (
                            <div className={styles.certain}>
                                <div>the right answer is</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        ) : (
                            <div className={styles.wrong}>
                                <div>the answer is wrong</div>
                                <div className={styles.value}>{answer.value}</div>
                            </div>
                        )}
                    </div>
                )}


            </div>
        </div>
    )
}