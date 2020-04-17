import styles from "../components/Score.module.css";

type ScoreProps = {
  score: number
};

const Score = ({ score }: ScoreProps) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div className={styles.score}>{Math.trunc(score)}</div>
    </div>
  );
}

export default Score;