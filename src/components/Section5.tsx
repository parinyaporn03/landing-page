import React from "react";
import Styles from "../style/Section5.module.css";
import Logo from "../assets/Logo.png";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoTwitter } from "react-icons/io5";
import GooglePlay from "../assets/googleplay.png";
import AppStore from "../assets/appstore.png";
const Section5 = () => {
  const text = [
    {
      head: "Company",
      item: ["About", "What We Offer", "Our Course", "Careers"],
    },
    {
      head: "Teaching",
      item: [
        "Become a Teacher",
        "Teacher Help Center",
        "Rules & Requirements",
        "Leadership",
      ],
    },
    {
      head: "Community",
      item: ["Learners", "Partners", "Blog & News", "Team Plans"],
    },
  ];
  return (
    <div className={Styles.section5}>
      <div className={Styles.content}>
        <div className={Styles.first}>
          <img src={Logo} />
          <div className={Styles.contact}>
            <div className={Styles.bg}>
              <FaWhatsapp className={Styles.icon} />
            </div>
            <div className={Styles.contacttext}>
              <div className={Styles.name}>WhatsApp</div>
              <div className={Styles.detail}>0812 8899 9576</div>
            </div>
          </div>
          <div className={Styles.contact}>
            <div className={Styles.bg}>
              <AiOutlineMail className={Styles.icon} />
            </div>
            <div className={Styles.contacttext}>
              <div className={Styles.name}>Email</div>
              <div className={Styles.detail}>upskill@mail.com</div>
            </div>
          </div>
        </div>
        {text.map((i) => (
          <div className={Styles.info} key={Math.random()}>
            <h2>{i.head}</h2>
            {i.item.map((i) => (
              <div key={Math.random()} className={Styles.text}>
                {i}
              </div>
            ))}
          </div>
        ))}
        <div className={Styles.connect}>
          <h2>Connect with us</h2>
          <div className={Styles.socialicon}>
            <BiLogoFacebook className={Styles.social} />
            <IoLogoTwitter className={Styles.social} />
            <FaYoutube className={Styles.social} />
            <FaInstagram className={Styles.social} />
          </div>
          <div className={Styles.download}>
            <img src={GooglePlay} />
            <img src={AppStore} />
          </div>
        </div>
      </div>
      <div className={Styles.line}>
        <div className={Styles.inline}></div>
      </div>
      <div className={Styles.footer}>
        <div className={Styles.left}>
          <div className={Styles.vertical}>Privacy Practices</div>
          <div className={Styles.vertical}>Disclaimer</div>
          <div className={Styles.vertical}>Accessibility</div>
          <div className={Styles.vertical}>Terms of Use</div>
          <div>Sitemap</div>
        </div>
        <div className={Styles.right}>
          Copyright © 2024 Upskill | Powered by Onecontributor
        </div>
      </div>
    </div>
  );
};

export default Section5;
