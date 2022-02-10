import React from "react";
import styles from "./rarity.module.css";
const Rarity = () => {
  return (
    <div className={styles.rarity} id="rarity">
      <div className="container">
        <div>
          <h2 className={styles.rarityInnerHeading}>rarity</h2>
          <div className={styles.rarityInnerContent}>
            <p>
              There will be a total of 500 Songs. There rarity will be the
              following:
            </p>
            <p>
              <span style={{ color: "#F00C0C" }}>Uncommon </span>Song: ICP -
              Alley Rat Qty: 125
            </p>
            <p>
              <span style={{ color: "#F00C0C" }}>Uncommon</span> Song: ICP -
              Smell of Rain Qty: 125
            </p>
            <p>
              <span style={{ color: "#0CF037" }}>Rare</span> Song: ICP - Take Me
              Away Qty: 92
            </p>
            <p>
              <span style={{ color: "#0CF037" }}>Rare</span> Song: ICP -
              Nobody’s Fault Qty: 89
            </p>
            <p>
              <span style={{ color: "#FFF53E" }}>Legendary</span> Song: ICP -
              Chop Chop Slide Qty: 69
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rarity;
