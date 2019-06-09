import React from 'react';

import styles from './granny.css';
import grannyJpg from './granny.jpg';


const Granny = () => {
  return (
    <div className={styles.root}>
      <img className={styles.picture} src={grannyJpg} />
    </div>
  );
};

export default Granny;
