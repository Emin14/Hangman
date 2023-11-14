import styles from './Question.module.css';

export default function Question({ id, question }) {
  return (
    <h2 className={styles.wrapper}>{`${id}.${question}`}</h2>
  );
}
