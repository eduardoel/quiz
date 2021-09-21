import styles from '../styles/Result.module.css'
import { useRouter } from "next/router"
import Statistic from '../components/Statistic'
import Button from '../components/Button'

export default function Result() {

    const router = useRouter()

    const total = +router.query.total
    const correct = +router.query.correct
    const percentage = Math.round((correct / total) * 100)

    return (
        <div className={styles.result}>
            <h1>Result</h1>
            <div style={{display: "flex"}}>
                <Statistic text="Questions" value={total}/>
                <Statistic text="Correct" value={correct}
                    backgroundColor="#9CD2A4"/>
                <Statistic text="Percentage" value={`${percentage}%`}
                    backgroundColor="#DE6A33"/>
            </div>
            <Button href="/" text="Try again?" />
        </div>
    )
}