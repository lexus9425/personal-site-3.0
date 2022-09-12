import React from 'react';

import styles from '../styles/socials.module.css';

const Socials = () => {
  return (
    <div className={styles.socials}>
      <a rel='noreferrer' href={"https://www.instagram.com/lexus9425/"} target='blank'>
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a rel='noreferrer' href={"https://twitter.com/Lexus9425"} target='blank'>
        <i class="fa-brands fa-twitter"></i>
      </a>
      
      <a rel='noreferrer' href={"https://www.linkedin.com/in/alexis-ojeda-b912578b/"} target='blank'>
        <i class="fa-brands fa-linkedin"></i>
      </a>
      
      <a rel='noreferrer' href={"https://github.com/lexus9425"} target='blank'>
        <i class="fa-brands fa-github"></i>
      </a>
    </div>
  );
};

export default Socials;