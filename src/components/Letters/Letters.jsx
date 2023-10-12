import React, { useContext, useEffect } from 'react'
import { Context } from '../../MyContext'
import {alphabetAZ} from '../../alphabet'
import styles from './Letters.module.css'


export default function Letters() {

  const { setLetter, gameCount, incorrectAnswersCount } = useContext(Context);

  useEffect(() => {
    const list = [...document.querySelectorAll('LI')]
    list.filter(item => item.style.textDecorationColor === 'red').map(item => item.style.textDecoration = 'none')
  }, [gameCount])

  useEffect(() => {
    if (incorrectAnswersCount > 4) {
      const list = [...document.querySelectorAll('LI')]
      setTimeout(() => {
        list.filter(item => item.style.textDecorationColor === 'red').map(item => item.style.textDecoration = 'none')
      }, 1700)

    }
  }, [incorrectAnswersCount])

  const handleClick = (e) => {
    if (incorrectAnswersCount > 4) {
      return
    }
    if (e.target.tagName === 'LI' && e.target.style.textDecorationColor !== 'red') {
      setLetter(e.target.innerHTML)
      e.target.style.textDecoration = 'line-through'
      e.target.style.textDecorationColor = 'red'
    }
  }


  return (
    <div className={styles.wrapper} onClick={handleClick}>
      {alphabetAZ.map(item => (
        <li className={styles.letter}>{item}</li>
      ))}
    </div>
  )
}
