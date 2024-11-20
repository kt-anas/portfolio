import React from 'react';
import styles from '../styles/pages/about.module.scss';

function About() {
  return (
    <div className={styles.container}>
      <div className={`${styles.absolute} ${styles['justify-center']}`}>
        <div className={`${styles.bgShape} ${styles.bgTealGreen} ${styles.bgBlur}`} />
        <div className={`${styles.bgShape} ${styles.bgTealBlue} ${styles.bgBlur}`} />
        <div className={`${styles.bgShape} ${styles.bgTealRed} ${styles.bgBlur}`} />
      </div>
      <h1>About</h1>
    </div>
  );
}

export default About;
