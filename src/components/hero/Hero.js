import React, { useState } from "react";
import styles from "./hero.module.css";
import rightImg from "../../assets/images/Group 22.png";
const Hero = () => {
  const [state, setState] = useState(1);
  const decHandler = () => {
    setState(state - 1);
  };
  const incHandler = () => {
    setState(state + 1);
  };
  return (
    <div className={styles.heroWrapper} id="mint">
      <div className="container">
        <div className={styles.heroWrapperInner}>
          <div className="row">
            <div className="col-lg-6">
              <h2 className={styles.heroHeading}>
                Clown Posse: Deep Vault NFT Collective
              </h2>
              <p className={styles.heroContent}>
                The first NFT Song drop from the Platinum selling band ICP. The
                mint of these songs will be completely random, Your song will be
                instantly revealed upon purchase. Songs will provide the seller
                with different rarity of songs and limited exclusive usage for
                things such as Youtube, TikTok, podcast, etc. There will be only
                500 total at a cost of .069 per mint, max 3. 5 will be reserved
                at .05 for Shaggy 2 Dope Remixx Holders.
              </p>
              <p className={styles.heroContent}>
                For the true collectors, if you were to collect all 5 NFTs. The
                first 50 will be able to redeem an exclusive Insane Clown Posse
                hoody. Redeemable through the website. (shipping and handling
                charges will apply).
              </p>
              {/* <h6 className={styles.heroMint}>0/500 Mint at 0.069 ETH Each</h6>
              <div className={styles.heroMintNow}>
                <div className={styles.heroIncDec}>
                  <button className={styles.decBtn} onClick={decHandler}>
                    -
                  </button>
                  <span className={styles.incDecRslt}>
                    {state < 10 && state >= 0 ? "0" + state : state}
                  </span>
                  <button className={styles.incBtn} onClick={incHandler}>
                    +
                  </button>
                </div>
                <div>
                  <button className={styles.mintNowBtn}>MINT NOW</button>
                </div>
              </div> */}
            </div>
            <div className={`col-lg-6 ${styles.rightImgWrapper}`}>
              <img className={styles.rightImg} src={rightImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
