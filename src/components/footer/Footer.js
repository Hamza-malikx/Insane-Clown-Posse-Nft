import React from "react";
import Logo from "../../assets/icons/Logo.png";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <img src={Logo} alt="" />
        <p className={styles.footerRights}>
          © 2021 Insane Clown Posse, ALL RIGHTS RESERVED.
        </p>
        {/* <p> */}
        <div className={styles.socialLinks}>
          <div className={styles.socialLinksInner}>
            <i className="fab fa-twitch"></i>
          </div>
          <div className={styles.socialLinksInner}>
            <i className="fab fa-facebook-f"></i>
          </div>
          <div className={styles.socialLinksInner}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={styles.socialLinksInner}>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
        {/* </p> */}
      </div>
    </footer>
  );
};

export default Footer;
