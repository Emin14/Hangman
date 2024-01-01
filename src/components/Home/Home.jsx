/* eslint-disable */
import { useEffect, useState } from 'react';
import Letters from '../Letters/Letters';
import Answer from '../Answer/Answer';
import Banner from '../Banner/Banner';
import Question from '../Question/Question';
import styles from './Home.module.css';
import data from '../../data-ru.json';
import { alphabetRU } from '../../utils/constans';
import letterCounting from '../../utils/letterCounting';
import findCurrentObject from '../../utils/findCurrentObject';

export default function Home() {
  const [chekedletter, setChekedletter] = useState([]);
  const [gameCount, setGameCount] = useState(1);
  const [currentObject, setCurrentObject] = useState(null);
  const [status, setStatus] = useState(null);
  const [inCorrectCount, setInCorrectCount] = useState(0);

  // функция обнуления и изменения статуса
  const reset = (value) => {
    const count = value === 'correctly' ? ((prev) => prev + 1) : 1;
    const time = value === 'correctly' ? 1000 : 2000;
    setStatus(value);
    setTimeout(() => {
      setStatus('');
      setGameCount(count);
      setChekedletter([]);
    }, time);
  };

  const handleClick = (e) => {
    if (!chekedletter.includes(e.target.innerHTML) && !status) {
      setChekedletter((prev) => [...prev, e.target.innerHTML]);
    }
  };

  useEffect(() => {
    if (currentObject) {
      const letterCount = letterCounting(currentObject, chekedletter);
      const { inCorrectLetter, correctlyRound, inCorrectLetterCount } = letterCount;
      setInCorrectCount(inCorrectLetterCount);

      if (correctlyRound && gameCount < data.length) {
        reset('correctly');
      }
      if (inCorrectLetter.length === 5) {
        reset('game over');
      }
      if (correctlyRound && gameCount >= data.length) {
        reset('win');
      }
    }
  }, [chekedletter]);

  useEffect(() => {
    setCurrentObject(findCurrentObject(data, gameCount));
  }, [gameCount]);

  console.log(currentObject)

  if (currentObject) {
    return (
      <div className={styles.container}>
          <div className={styles.question}>
            <Question id={currentObject.id} question={currentObject.question} />
          </div>
          <div className={styles.wrapper}>
            <Banner count={inCorrectCount} />
            <Letters alphabet={alphabetRU} chekedletter={chekedletter} handleClick={handleClick} />
          </div>
          <div className={styles.answer}>
            <Answer arrayOfcurrentAnswer={currentObject.answer.split('')} chekedletter={chekedletter} status={status} />
          </div>
      </div>
    );
  }
}
