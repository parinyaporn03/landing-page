import React from "react";
import Styles from "../style/Section1.module.css";
import Women from "../assets/women.png";
import Check from "../assets/Check.png";
const Section1 = () => {
  const text = [
    "Relevant Skill set",
    "Growth Mindset",
    "1-on-1 Mentoring",
    "Hiring Partners",
  ];
  return (
    <div className={Styles.section1}>
      <div>
        <div className={Styles.h}>
          <div>The Advantages of the</div>
          <div>upskill Program</div>
        </div>
        <div>
          <div className={Styles.childbox}>
            {text.map((i) => (
              <div className={Styles.subbox} key={Math.random()}>
                <div className={Styles.check}>
                  <img src={Check} alt="check-img" width={30} />
                </div>
                <div className={Styles.text}>
                  <div className={Styles.hlist}>{i}</div>
                  <div className={Styles.subtext}>
                    Lorem ipsum dolor sit amet <br /> consectetur adipiscing
                    elit
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <img src={Women} width={500} className={Styles.women} />
    </div>
  );
};

export default Section1;
