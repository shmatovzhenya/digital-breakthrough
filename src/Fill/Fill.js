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
            />
          </label>
          <div className={styles.label}>
            <span className={`${styles.text} ${styles.firstText}`}>Пол</span>
            <label className={styles.radioItem}>
              <div className={styles.radio}>
                <input type="radio" name="sex" value="male" />
                <div />
              </div>
              <span className={styles.secondaryText}>М</span>
            </label>
            <label className={styles.radioItem}>
              <div className={styles.radio}>
                <input type="radio" name="sex" value="female" />
                <div />
              </div>
              <span className={styles.secondaryText}>Ж</span>
            </label>
          </div>
          <label className={styles.label}>
            <span className={`${styles.text} ${styles.firstText}`}>СНИЛС</span>
            <input className={styles.input}/>
          </label>
          <label className={styles.label}>
            <span className={styles.text}>Ваша специализация</span>
            <input className={styles.input} />
          </label>
        </div>
        <label className={styles.label}>
          <span className={styles.text}>Желаемая зарплата</span>
          <input type="number" name="zp" className={styles.input} />
        </label>
        <div className={`${styles.label} ${styles.text}`}>
          <span className={styles.text}>Хочу работать</span><input type="number" placeholder="дней" className={styles.input} /> в неделю , и <input type="number" placeholder="часов" className={styles.input} /> в день, или
        </div>
        <label>
          <span>свой вариант</span>
          <input type="checkbox" />
        </label>
        <div>
          <textarea></textarea>
        </div>
        <Link to="/agreement"> 
          Показать работодателей
        </Link>
      </form>
    </section>
  );
};

export default Fill;
