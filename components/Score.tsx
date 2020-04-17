import styles from "../components/Score.module.css";

type ScoreProps = {
  score: number
};

const Score = ({ score }: ScoreProps) => {
  return <div className={styles.score}>{score}%</div>;
}

export default Score;