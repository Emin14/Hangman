import React from 'react'
import hangman1 from '../../assets/img/hangman1.jpg';
import hangman2 from '../../assets/img/hangman2.jpg';
import hangman3 from '../../assets/img/hangman3.jpg';
import hangman4 from '../../assets/img/hangman4.jpg';
import hangman5 from '../../assets/img/hangman5.jpg';
import hangman6 from '../../assets/img/hangman6.jpg';
import {useContext} from 'react';
import {Context} from '../../MyContext'
import styles from './Banner.module.css'

export default function Banner() {

    const {incorrectAnswersCount} = useContext(Context);

    const imgArray = [hangman1, hangman2, hangman3, hangman4, hangman5, hangman6]

  return (
    <div className={styles.wrapper}>
        <img src={imgArray[incorrectAnswersCount]} alt="logo" />
    </div>
  )
}
