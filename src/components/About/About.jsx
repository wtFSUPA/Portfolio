import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img height="75" width="150" src={getImageUrl("about/clg.png") } alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>B. Tech 2020-2024</h3>
              <p>
                Yeshwant Rao Chavhan College of Engineering <br /> cgpa: 7.54
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img height="75" width="150" src={getImageUrl("about/12th.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>12th (State Board) 2020</h3>
              <p>
                Adarsh Sanskar Vidyalay,Nagpur <br />
                78.8%
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img class="marginal" height="100" width="100" src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>10th CBSE 2018</h3>
              <p>
                St Xavier's High School,Nagpur <br></br>  72.2%
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
