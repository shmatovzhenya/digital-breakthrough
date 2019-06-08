import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './fill.css';


const Fill = () => {
  const [ age, setAge ] = useState('');

  return (
    <section className={styles.root}>
      <form>
      <div className={styles.panel1}>
      <h1 className={styles.header}>Введите ваши данные</h1>
          <label className={styles.label}>
            <span className={`${styles.text} ${styles.firstText}`}>Возраст</span>
            <input
              type="number"
              name="age"
              className={styles.input}
              value={age}
              onChange={event => {
                const { value } = event.target;
                const age = value.replace(/[^0-9]/i, '');

                setAge(age);
              }}
              style={{width: 80}}
            />
          </label>
          <div className={styles.label}>
            <span className={`${styles.text} ${styles.firstText}`}>Пол</span>
            <label className={styles.radioItem}>
              <div className={styles.radio}>
                <input type="radio" name="sex" value="male" />
                <div />
              </div>
              <span className={styles.secondaryText} style={{ marginLeft: 5, marginRight: 15 }}>М</span>
            </label>
            <label className={styles.radioItem}>
              <div className={styles.radio}>
                <input type="radio" name="sex" value="female" />
                <div />
              </div>
              <span className={styles.secondaryText} style={{ marginLeft: 5 }}>Ж</span>
            </label>
          </div>
          <label className={styles.label}>
            <span className={`${styles.text} ${styles.firstText}`}>СНИЛС</span>
            <input className={styles.input}/>
          </label>
          <label className={styles.label}>
            <span className={styles.text} style={{ marginRight: 30 }}>Ваша специализация</span>
            <sub className={styles.sub}>или последнее место работы</sub>
            <textarea className={styles.textarea} />
          </label>
        </div>
        <div className={styles.panel2}>
          <label className={styles.label}>
            <span className={styles.text} style={{marginRight: 30}}>Желаемая З/П</span>
            <input type="number" name="zp" className={styles.input} style={{ width: 180, borderColor: 'rgba(255, 255, 255, 0.4)' }} />
          </label>
          <div className={`${styles.label} ${styles.text}`}>
            <span className={styles.text}>Хочу работать </span> <input type="number" className={styles.input} style={{width: 50, borderColor: 'rgba(255, 255, 255, 0.4)'}} /> дней в неделю , и <input type="number" style={{width: 50, borderColor: 'rgba(255, 255, 255, 0.4)'}} className={styles.input} /> часов в день.
          </div>
          <Link to="/agreement" className={styles.button}> 
            Показать работодателей
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Fill;
