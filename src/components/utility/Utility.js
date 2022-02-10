import React from "react";
import styles from "./utility.module.css";
import mergeImg from "../../assets/images/Layer 5.png";
import unLockImg from "../../assets/images/Layer 6.png";
import ipRightsImg from "../../assets/images/Layer 7.png";
import exluImg from "../../assets/images/Layer 8.png";
const Utility = () => {
  return (
    <div className={styles.utility}>
      <div className="container">
        <h2 className={styles.utilityHeading}>Utility</h2>
        {/* <div className={styles.utilityWrapper}> */}
        <div className={`row ${styles.utilityWrapperInner}`}>
          <div className="col-lg-3 col-6">
            <div className={styles.utilityInner}>
              <img src={mergeImg} alt="" />
              <h4 className={styles.utilityInnerHeadingMerge}>MERCH</h4>
              <p className={styles.utilityInnerContent}>
                50 Custom Hoodies will be redeemable by the holders of all 5
                songs. This will be extremely limited. (shipping and handling
                will apply)
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.utilityInner}>
              <img src={unLockImg} alt="" />
              <h4
                className={styles.utilityInnerHeading}
                style={{ marginLeft: "33px" }}
              >
                UNLOCK
              </h4>
              <p className={styles.utilityInnerContent}>
                Holders of the NFT will receive future Whitelist oppurtunitys
                from the band for future NFTs as well as physical collectibles.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.utilityInner}>
              <img src={ipRightsImg} alt="" />
              <h4 className={styles.utilityInnerHeading}>IP RIGHTS</h4>
              <p className={styles.utilityInnerContent}>
                NFT Holders will have a limited non-exclusive copyright license
                for thesongs they hold. Including 1 Music Video, For Profit Live
                Performances. Podcast/Youtube  Broadcast Rights (1 Station). Up
                to 3000 Online Audio Streams Read the NFT Usage for full terms.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-6">
            <div className={styles.utilityInner}>
              <img src={exluImg} alt="" />
              <h4 className={styles.utilityInnerHeading}>EXCLUSIVE</h4>
              <p className={styles.utilityInnerContent}>
                5 different songs will be distrubuted. Each one exclusive to
                your individual NFT. There will be 5 different rarity levels.
                Holders will have a chance to have one of your NFTs remixxed by
                Shaggy 2 Dope to be created into your own personalized NFT. Must
                have full commercial rights. More details to come later.
              </p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Utility;
