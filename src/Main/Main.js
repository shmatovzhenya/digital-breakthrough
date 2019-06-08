import React from 'react';
import { Link } from 'react-router-dom';

import styles from './main.css';


const Main = () => {
  return (
    <div className={styles.root}>
      <Link className={styles.button} to="/fill">
        <button className={styles.button}>
          Хочу работу
        </button>
      </Link>
    </div>
  );
};

export default Main;
