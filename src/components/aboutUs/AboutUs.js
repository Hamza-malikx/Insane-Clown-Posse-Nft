import React from "react";
import styles from "./aboutUs.module.css";
import noBody from "../../assets/images/ICP - Nobodys Fault Cover.png";
import smellOfRain from "../../assets/images/ICP - Smell Of Rain Cover.png";
import takeMeAway from "../../assets/images/ICP - Take Me Away Cover.png";
import chopChop from "../../assets/images/ICP Chop Chop Slide Flat.png";
const AboutUs = () => {
  return (
    <div className={styles.aboutUsWrapper} id="about">
      <div className="container">
        <h2 className={styles.aboutUsHeading}>About Us</h2>
        <p className={styles.aboutUsContent}>
          Insane Clown Posse often abbreviated ICP, is an American Platinum
          selling Hip Hop Duo formed in Detroit. Consisting of Rappers Violent J
          and Shaggy 2 Dope.
        </p>
      </div>
      <div className={styles.imgsCarous}>
        <div className={styles.imgsCarousWrapper}>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0">
            <img src={noBody} alt="" className={styles.aboutUsImgs} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0">
            <img src={smellOfRain} alt="" className={styles.aboutUsImgs} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0">
            <img src={takeMeAway} alt="" className={styles.aboutUsImgs} />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-6 p-0">
            <img src={chopChop} alt="" className={styles.aboutUsImgs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
