import React from 'react';

import styles from '../styles/about.module.css';

const About = () => {
  return (
    <div id='about' className={styles.section}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.aboutMe}>I've been passionate about computers and tech since I was in High School. I would spend hours on YouTube watching videos on the newest phones and laptops.<br></br>By the time I went to college, that love for tech, led me to pursue a degree in the computer field. In May of 2017, I graduated from NCC with an A.A.S in Information Technology. I then spent the next 5 years working in the IT Field in mainly IT Support Specialists roles. And as my knowledge in IT grew, so did my thirst to learn more. That leads me today, where I have completed a Udemy course in Full Stack Web Development. And will begin to transition from the IT field and into the Web Development field. I will continue to learn more web technologies to grow my knowledge base. I'm interested in learning more about Shopify, databases, and mobile app development.</p>
    </div>
  );
};

export default About;