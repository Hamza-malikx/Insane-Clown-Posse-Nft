import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../../assets/icons/Logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [scrollState, setScrollState] = useState();
  const [hamburger, setHamburger] = useState("false");
  const clickHandler = () => {
    if (hamburger === "true") {
      setHamburger("false");
    } else {
      setHamburger("true");
    }
  };
  useEffect(() => {
    document.addEventListener("scroll", () => {
      let listener = null;

      listener = document.addEventListener("scroll", (e) => {
        var scrolled = document.scrollingElement.scrollTop;
        setScrollState(scrolled);
      });
    });
  }, [scrollState]);
  return (
    <div>
      <div
        className={styles.header}
        style={
          scrollState > 100
            ? { backgroundColor: "black" }
            : { backgroundColor: "transparent" }
        }
      >
        <div className="container">
          <nav className={styles.headerWrapper}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>
            <div className={styles.navbar}>
              <ul className={styles.navbarUl}>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/">
                    MINT
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/">
                    ROADMAP
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/">
                    FAQ
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/">
                    TEAM
                  </Link>
                </li>
                <li className={styles.navbarItems}>
                  <Link className={styles.navbarLink} to="/nft-usage">
                    NFT USAGE
                  </Link>
                </li>
                <li className={styles.navbarItems}>
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
                </li>
              </ul>
              <ul className={styles.hamUl}>
                <li>
                  <label
                    className={
                      hamburger === "false"
                        ? `${styles.humbergButton}`
                        : `${styles.humbergButton}`
                    }
                    onClick={clickHandler}
                  >
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.topbar}`
                          : `${styles.topbarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.middlebar}`
                          : `${styles.middlebarab}`
                      }
                    ></span>
                    <span
                      className={
                        hamburger === "false"
                          ? `${styles.bottombar}`
                          : `${styles.bottombarab}`
                      }
                    ></span>
                  </label>
                </li>
              </ul>
              {hamburger === "true" ? (
                <div className={styles.wrapper}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ margin: "20px 0 !important" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        MINT
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        ROADMAP
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        FAQ
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/">
                        TEAM
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/nft-usage">
                        NFT USAGE
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fab fa-twitch"></i>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fab fa-twitter"></i>
                        </div>
                        <div
                          className={styles.socialLinksInnergg}
                          style={{ marginRight: "5px" }}
                        >
                          <i className="fab fa-instagram"></i>
                        </div>
                      </div>
                    </li>
                    <li style={{ textAlign: "center" }}>
                      <button className={styles.connectWalBtnAg}>
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className={styles.wrapperab}>
                  <ul className={styles.sideBarUl}>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ marginRight: "5px" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        MINT
                      </Link>
                    </li>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ marginRight: "5px" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        ROADMAP
                      </Link>
                    </li>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ marginRight: "5px" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        FAQ
                      </Link>
                    </li>
                    <li
                      className={styles.navbarItemsAg}
                      style={{ marginRight: "5px" }}
                    >
                      <Link className={styles.navbarLink} to="/">
                        TEAM
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <Link className={styles.navbarLink} to="/nft-usage">
                        NFT USAGE
                      </Link>
                    </li>
                    <li className={styles.navbarItemsAg}>
                      <div className={styles.socialLinks}>
                        <div className={styles.socialLinksInnergg}>
                          <i className="fab fa-twitch"></i>
                        </div>
                        <div className={styles.socialLinksInnergg}>
                          <i className="fab fa-facebook-f"></i>
                        </div>
                        <div className={styles.socialLinksInnergg}>
                          <i className="fab fa-twitter"></i>
                        </div>
                        <div className={styles.socialLinksInnergg}>
                          <i className="fab fa-instagram"></i>
                        </div>
                      </div>
                    </li>
                    <li style={{ textAlign: "center " }}>
                      <button className={styles.connectWalBtnAg}>
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className={styles.connectWalBtnWrapper}>
              <button className={styles.connectWalBtn}>Connect Wallet</button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
