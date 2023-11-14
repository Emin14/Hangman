import styles from './Letters.module.css';

export default function Letters({ alphabet, chekedletter, handleClick }) {
  return (
    <ul className={styles.wrapper} onClick={handleClick} onKeyDown={handleClick} role="presentation">
      {alphabet.map((item) => (
        <li key={item} className={chekedletter.includes(item) ? [styles.letter, styles.checked, 'letter'].join(' ') : [styles.letter, 'letter'].join(' ')}>{item}</li>
      ))}
    </ul>
  );
}
