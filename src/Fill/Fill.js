import React from 'react';
import { Link } from 'react-router-dom';

import styles from './fill.css';


const Fill = () => {
  return (
    <div className={styles.root}>
      <form>
        <label>
          <span>Возраст</span>
          <input type="number" name="age" />
        </label>
        <div>
          <span>Пол</span>
          <label>
            <span>Мужской</span>
            <input type="radio" name="sex" value="male" />
          </label>
          <label>
            <span>Женский</span>
            <input type="radio" name="sex" value="female" />
          </label>
        </div>
        <div>
          <span>Хочу работать</span><input type="number" /> дней в неделю, <input type="number" /> часов в день, или
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
    </div>
  );
};

export default Fill;
