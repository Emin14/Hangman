import { imgArray } from '../../utils/constans';
import styles from './Banner.module.css';

export default function Banner({ count }) {
  return (
    <div className={styles.wrapper}>
      <img src={imgArray[count]} alt="hangman" />
    </div>
  );
}
