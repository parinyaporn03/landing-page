import React from "react";
import Styles from "../style/Header.module.css";
import Man from "../assets/man.png";
import Development from "../assets/Development.png";
import Language from "../assets/Language.png";
import Marketing from "../assets/Marketing.png";
import Finance from "../assets/Finance.png";
import Design from "../assets/Design.png";
import Photography from "../assets/Photography.png";
import Office from "../assets/Office.png";
import Science from "../assets/Science.png";
import Bussiness from "../assets/Business.png";

const Header = () => {
  const element = [
    {
      path: Bussiness,
      name: "Bussiness",
    },
    {
      path: Development,
      name: "Development",
    },
    {
      path: Language,
      name: "Language",
    },
    {
      path: Marketing,
      name: "Marketing",
    },
    {
      path: Finance,
      name: "Finance",
    },
    {
      path: Design,
      name: "Design",
    },
    {
      path: Photography,
      name: "Photography",
    },
    {
      path: Office,
      name: "Office",
    },
    {
      path: Science,
      name: "Science",
    },
  ];
  return (
    <div className={Styles.header}>
      <div className={Styles.box}>
        <div className={Styles.text}>
          <div className={Styles.word}>
            <div className={Styles.vertical}>Home</div>
            <div>Bootcamp</div>
          </div>
          <div className={Styles.h}>Bootcamp Program</div>
        </div>
      </div>
      <div className={Styles.element}>
        {element.map((i) => (
          <div className={Styles.item} key={Math.random()}>
            <img src={i.path} />
            <div>{i.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
