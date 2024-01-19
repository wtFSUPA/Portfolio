import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 id="headings" className={styles.title}>Hi, I'm Suparshva</h1>

        <p className={styles.description}>
          Python developer with proficiency in ReactJS for front-end, I
          specialize in creating integrated and user-friendly applications. My
          track record includes successful contributions to diverse projects,
          showcasing frontend expertise. I'm
          open to discussing how my skills can enhance your team.Reach out for
          more details!
        </p>
        <a href="suparshwasahare@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
