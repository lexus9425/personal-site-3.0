import React from 'react';

import styles from '../styles/intro.module.css';

const Intro = () => {
  return (
    <div className={styles.content}>
      <h1 className='fadeIn1'>Hi 👋🏼</h1>
      <h1 className='fadeIn2'>
        I'm <span>Alexis</span>,
      </h1>

      <div>
        <h2 className='fadeIn3'>
          A <span>Web Developer</span> & <span>IT Professional</span>
        </h2>
      </div>
    </div>
  );
};

export default Intro;