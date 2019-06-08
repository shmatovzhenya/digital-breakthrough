import React from 'react';
import { Link } from 'react-router-dom';

import styles from './main.css';


const Main = () => {
  return (
    <section className={styles.root}>
      <h1 className={styles.header}>Здравствуйте!
      </h1>
      <p className={styles.header}>Вас приветствует 
      государственный электронный 
      помощник в&nbsp;сфере 
      трудоустройства. Если вы&nbsp;готовы 
      найти работу -
      нажмите кнопку&nbsp;&laquo;Начать&raquo;.
      </p>
      <Link className={styles.link} to="/agreement">
        <button className={styles.button}>
          Хочу работу
        </button>
      </Link>
    </section>
  );
};

export default Main;
