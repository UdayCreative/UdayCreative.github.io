import React from "react";
import { ThemeContext } from "../../ContextProvider/ThemeContext";
// import WindowSize from "../../Utils/WindowSize";
import styles from "./About.module.css";

const About = () => {
  const { newTheme } = React.useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={{ boxShadow: `3px 3px 5px ${newTheme.line}`, marginTop: "80px" }}
    >
      <div className={styles.first}>
        <img
          src={
            "https://goofy-goldstine-0f8bb1.netlify.app/img/web.gif"
          }
          alt="git-gif"
        />
      </div>
      <div className={styles.second}>
        <h1 style={{ color: `${newTheme.title}` }} className={styles.heading}>
          About Me
        </h1>
        <div className={styles.borderBottom} />
        <p style={{ color: `${newTheme.para}` }} className={styles.aboutMe}>
          A web developer with a vast array of knowledge in many different front end and backend languages,
          responsive frameworks, databases, and best code practices. Look forward to using my skills for
          gaining more experience. here I am
          <span style={{ color: `#00a0a0` }}>
            {" "}
            looking for an opportunity as a Full-Stack Web Developer
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
