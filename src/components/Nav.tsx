import Logo from "../assets/Logo.png";
import Styles from "../style/Nav.module.css";
const Nav = () => {
  return (
    <>
      <div className={Styles.nav}>
        <img src={Logo} className={Styles.logo} />
        <div className={Styles.menu}>
          <div>Home</div>
          <div>Course</div>
          <div>Bootcamp</div>
          <div>Page</div>
          <div>Blog</div>
          <div>Contact</div>
        </div>
        <div className={Styles.accessbtn}>
          <div className={Styles.loginbtn}>Login</div>
          <div className={Styles.regisbtn}>Register</div>
        </div>
      </div>
    </>
  );
};

export default Nav;
