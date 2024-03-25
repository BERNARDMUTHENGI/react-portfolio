import React from "react";
import Kavii from '../../../assets/about/kavii.jpeg'
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import Codes from '../../../assets/about/codess.jpeg'
import Backend from '../../../assets/about/backend.jpeg'

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
      <img src={Kavii} alt="Server icon" style={{height:"180px", width:"180px", backgroundColor:"red", borderRadius:"50%"}}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={Codes} style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
               I am a front-end Engineer with adequate experience of creating and developing,
               responsive and attractive, and good functional user interfaces.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={Backend} style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have developed several optimised and effective APIs using ExpressJs,
                NodeJs and MOngoDb and MySql for their Databases.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={Backend} style={{height:"35px", width:"35px", borderRadius:"50%"}}/>
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
               I have created several system Designs for various Clients, Both for business and
               personal portfolio projects
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
