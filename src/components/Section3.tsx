import React from "react";
import Styles from "../style/Section3.module.css";
import CV from "../assets/CV.png";
import Interview from "../assets/Interview.png";
import System from "../assets/System.png";
import Career from "../assets/Career.png";
const Section3 = () => {
  const element = [
    {
      name: "CV & Resume Prep",
      path: CV,
    },
    {
      name: "Interview Coaching",
      path: Interview,
    },
    {
      name: "Buddy System",
      path: System,
    },
    {
      name: "Career Opportunity",
      path: Career,
    },
  ];
  return (
    <div className={Styles.section3}>
      <div className={Styles.content}>
        {element.map((e) => (
          <div className={Styles.element} key={Math.random()}>
            <img src={e.path} />
            <div className={Styles.h}>{e.name}</div>
            <div className={Styles.text}>
              Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section3;
