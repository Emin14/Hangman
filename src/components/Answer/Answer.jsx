import { v4 as uuidv4 } from 'uuid';
import styles from './Answer.module.css';

export default function Answer({ arrayOfcurrentAnswer, chekedletter, status }) {
  return (
    <>
      <p className={styles.gameEnd}>
        {status}
      </p>
      <ul className={styles.list}>
        {
      arrayOfcurrentAnswer.map((item) => (
        <li key={uuidv4()} className={styles.item}>
          <span className={status || chekedletter.includes(item) ? styles.show : ''}>
            {item}
          </span>
        </li>
      ))
      }
      </ul>
    </>
  );
}
