import React, { useContext, useEffect, useState } from 'react'
import {Context} from '../../MyContext'
import data from '../../data-az.json'
import styles from './Answer.module.css'

export default function Answer() {

  const {letter, incorrectAnswersCount, setIncorrectAnswersCount, gameCount, setGameCount} = useContext(Context);
  const [result, setResult] = useState([])


  useEffect(() => {
    data[gameCount].answer.split('').forEach((item) => {
      if (item === letter) {
        setResult((prev) => [...prev, item])
      }
    });

    if(!data[gameCount].answer.includes(letter)) {
      setIncorrectAnswersCount((prev) => prev + 1)
    }
  }, [letter])


  useEffect(() => {
    if(incorrectAnswersCount > 4) {
      setTimeout(() => {
        setIncorrectAnswersCount(0)
        setResult([])
        setGameCount(0)
      }, 1800)
    }
  }, [incorrectAnswersCount])

  const answer = data[gameCount].answer.split('').sort().join('')

  useEffect(() => {
    if(result.sort().join('') === answer && gameCount !== data.length-1) {
      setTimeout(() => {
        setIncorrectAnswersCount(0)
        setResult([])
        setGameCount((prev) => prev + 1)
      }, 1100)
    }
    if(result.sort().join('') === answer && gameCount === data.length-1) {
      setTimeout(() => {
        setIncorrectAnswersCount(0)
        setResult([])
        setGameCount(0)
      }, 1700)
    }
  }, [result])


  return (
    <>
    <p className={styles.gameEnd}>
    {incorrectAnswersCount > 4 ? 'Game over'
    : gameCount === data.length-1 && result.sort().join('') === answer ? 'Win!!!!'
    : result.sort().join('') === answer ? 'Correctly!'
    : ''}
    </p>
    <ul className={styles.list}>
      {data[gameCount].answer.split('').map(item => (
          <li className={styles.item}>
            {<span className={incorrectAnswersCount > 4 || result.includes(item) ? styles.show : styles.noshow}>{item}</span>}
          </li>
      ))}
    </ul>
    </>
  )
}
