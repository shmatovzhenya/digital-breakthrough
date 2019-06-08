import React from 'react';

import styles from './layout.css';
import backgroundJpg from './background.jpg';


const Layout = ({ children }) => {
  return (
    <div className={styles.root}>
      <img className={styles.image} src={backgroundJpg} />
      <div className={styles.filter}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
