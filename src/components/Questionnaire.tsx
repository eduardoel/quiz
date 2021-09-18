import styles from '../styles/Questionnaire.module.css'
import QuestionModel from "../model/questionModel";
import Quiz from './Quiz';
import Button from './Button';

interface QuestionnaireProps {
    question: QuestionModel
    last: boolean
    questionAnswered: (question: QuestionModel) => void
    nextGo: () => void
}

export default function Questionnaire(props: QuestionnaireProps) {

    function onResponse(indice: number) {
        if(props.question.unanswered) {
            props.questionAnswered(props.question.replyWith(indice))
        }
    }
    
    return (
        <div className={styles.questionnaire}>
            {props.question ?
                <Quiz 
                    value={props.question}
                    responseTime={6}
                    onResponse={onResponse}
                    timerOver={props.nextGo} />
                : false
            }

            <Button onClick={props.nextGo} text={props.last ? 'Finish' : 'Next'} />
        </div>
    )
}