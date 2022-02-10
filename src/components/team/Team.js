import React from "react";
import styles from "./team.module.css";
import violentProf from "../../assets/images/Violentback.png";
import shaggyDope from "../../assets/images/Shaggy2DopeCat.png";
import benjamen from "../../assets/images/Metahero.png";
import jhon from "../../assets/images/chopChopCircle (1).png";
const Team = () => {
  return (
    <div className={styles.team}>
      <div className="container">
        <h2 className={styles.teamHeading}>the team</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-6">
            <img src={violentProf} alt="" className={styles.imgImg} />
            <h2 className={styles.teamInnerHeading}>VIOLENT J</h2>
            <p className={styles.teamInnerContent}>1/2 of Insane Clown Posse</p>
            <a href="https://twitter.com/ICP" className={styles.socialLinks}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className="col-lg-3 col-md-6 col-6">
            <img src={shaggyDope} alt="" className={styles.imgImg} />
            <h2 className={styles.teamInnerHeading}>SHAGGY 2 DOPE</h2>
            <p className={styles.teamInnerContent}>1/2 of Insane Clown Posse</p>
            <a
              href="https://twitter.com/ShaggyIcp"
              className={styles.socialLinks}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className={`col-lg-3 col-md-6 col-6 ${styles.lstImg}`}>
            <img src={benjamen} alt="" className={styles.imgImg} />
            <h2 className={styles.teamInnerHeading}>BENJAMIN BRAND</h2>
            <p className={styles.teamInnerContent}>Creative Director</p>
            <a
              href="https://twitter.com/BenjaminBrand"
              className={styles.socialLinks}
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div className={`col-lg-3 col-md-6 col-6 ${styles.lstImg}`}>
            <img src={jhon} alt="" className={styles.imgImg} />
            <h2 className={styles.teamInnerHeading}>john doe</h2>
            <p className={styles.teamInnerContent}>Creative Director</p>
            <a href="/" className={styles.socialLinks}>
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
