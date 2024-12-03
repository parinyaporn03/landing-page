import React from "react";
import Styles from "../style/Section4.module.css";
import { SlArrowDown } from "react-icons/sl";
const Section4 = () => {
  const items = [
    "Can I access course materials offline?",
    "Is there any prerequisite for courses?",
    "How long do I have access to a course?",
    "How can I make a payment for a course?",
    "How can I contact the course instructor?",
  ];
  return (
    <div className={Styles.section4}>
      <div className={Styles.content}>
        <div className={Styles.h}>Frequently Asked Questions</div>
        {items.map((i) => (
          <div className={Styles.list} key={Math.random()}>
            <div className={Styles.item}>
              <div>{i}</div>
              <SlArrowDown className={Styles.arrow} />
            </div>
          </div>
        ))}
        <div className={Styles.bottom}>www.DownloadNewThemes.com</div>
      </div>
    </div>
  );
};

export default Section4;
