import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import NftUsagePage from "../pages/nftUsagePage/NftUsagePage";
const Config = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/nft-usage" element={<NftUsagePage />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default Config;
