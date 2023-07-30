import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {ComputersCanvas} from "./canvas";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Custom function to check if the device is a small screen (mobile)
  const checkIfSmallScreen = () => {
    return window.innerWidth <= 640; // You can adjust the width value as per your requirements
  };

  // useEffect hook to update the state variable based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(checkIfSmallScreen());
    };

    // Initial check on mount
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">BIJIN B JAMES</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Transforming ideas into functional and elegant software solutions.
            <br className="sm:block hidden" />
          </p>
        </div>
      </div>

      {!isSmallScreen && <ComputersCanvas />} {/* Render ComputersCanvas only on larger screens */}


      <div>
        <br />
      </div>
      {isSmallScreen &&
      <div className="absolute xs:bottom-40 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] xs:w-[35px] xs:h-[64px] md:w-[25px] md:h-[53px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>}
      {/* The animated scrolling button for big screen */}
      {!isSmallScreen &&
      <div className="absolute xs:bottom-4 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] xs:w-[30px] xs:h-[60px] md:w-[22px] md:h-[45px] rounded-3xl border-2 border-secondary flex justify-center items-start p-1">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>}
    </section>
  );
};

export default Hero;