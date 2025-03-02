import React, { useState, useEffect } from "react";
import { Design } from "./components/Design";
import Nav from "../../Nav/Nav";
import Slider from "./Slider";
import { motion } from "framer-motion";
import ContainerConventer from "../../Conventer";
import { WalletConnect } from "../../components/WalletConnect/WalletConnect";

const Home = () => {
  return (
    <>
      {/* <Nav />
      <Design />
      <Slider /> */}

      <ContainerConventer />
      <WalletConnect />
    </>
  );
};

export default Home;
