import React, { useContext} from 'react'
import {Context} from '../../MyContext'
import data from '../../data-az.json'
import styles from './Question.module.css'

export default function Question() {

    const {gameCount} = useContext(Context);

  return (
    <h3 className={styles.wrapper}>{data[gameCount].id}.{data[gameCount].question}</h3>
  )
}
