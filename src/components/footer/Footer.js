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
            <a href="https://www.twitch.com/ICPNETWORK">
              <i className="fab fa-twitch"></i>
            </a>
          </div>
          <div className={styles.socialLinksInner}>
            <a href="https://www.facebook.com/INSANECLOWNPOSSE">
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
          <div className={styles.socialLinksInner}>
            <a href="https://twitter.com/icp">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className={styles.socialLinksInner}>
            <a href="https://www.instagram.com/therealicp/?hl=en">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className={styles.socialLinksInner}>
            <a href="https://www.youtube.com/channel/UC1kxQJwhVuZyheS1XKpzAHQ">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* </p> */}
      </div>
    </footer>
  );
};

export default Footer;
