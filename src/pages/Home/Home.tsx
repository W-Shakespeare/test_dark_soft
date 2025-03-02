import React, { useState, useEffect, useRef } from "react";
import { Design } from "./components/Design";
import Nav from "../../Nav/Nav";
import Slider from "./Slider";
import { motion } from "framer-motion";
import ContainerConventer from "../../components/Conventer";
import { WalletConnect } from "../../components/WalletConnect/WalletConnect";
import useVisibility from "../../hooks/useVisibility";

const Home = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isVisible = useVisibility(buttonRef);
  console.log("isVisible", isVisible);
  return (
    <>
      <Nav isVisible={isVisible} />
      <Design buttonRef={buttonRef} />
      <Slider />
      <ContainerConventer />
      <WalletConnect />
    </>
  );
};

export default Home;
