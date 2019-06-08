import React from 'react';
import { Link } from 'react-router-dom';

import styles from './not-found.css';


const NotFound = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.header}>К сожалению страница не найдена</h1>
      <Link className={styles.link} to="/">Вернуться на главную</Link>
    </div>
  );
};

export default NotFound;
