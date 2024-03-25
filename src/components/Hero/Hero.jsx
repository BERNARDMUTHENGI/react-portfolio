import React from "react";
import Bena from '../../../assets/hero/Bena.png'
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1  className={styles.title}>Hello I'm Bernard Muthengi</h1>
        <p className={styles.description}>
          I am a FullStack developer with three years of using React, Angular and NodeJs<br></br>
          I create Stunning User Interfaces, best responsive Website Designs and efficient APIs. Welcome to my world!!
        </p>
        <a href="mailto:bernardmuthengi9@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
       
      </div>
      <img
        src={Bena}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
