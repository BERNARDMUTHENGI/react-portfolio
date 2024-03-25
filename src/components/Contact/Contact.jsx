import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p style={{color:"rebeccapurple"}}>Just Reach out! Tel:0743675122</p>
      </div>
      <span style={{color:"rebeccapurple"}}>bernardmuthengi9@gmail.com</span>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:bernardmuthengi9@gmail.com"></a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/Bernard Muthengi"></a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/BERNARDMUTHENGI"></a>
        </li>
       
      </ul>
      <a
        href="assets/MY CV.pdf" download="MY CV.pdf" style={{textDecoration:"none",
        backgroundColor:"rebeccapurple",
        color:"white",
        width:"105px",
        height:"45px",
        borderRadius:"5px",
        alignItems:"center",
       marginTop:"3px",
       padding:"3px 4px"}}>
        <span style={{marginTop:"3px"}}>
        DOWNLOAD CV
        </span>
      </a>
    </footer>
  );
};
