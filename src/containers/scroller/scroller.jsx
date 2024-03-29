import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scroller.css";


const Scroller = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scrollBtn">
      {isVisible && <button onClick={scrollToTop}>⬆️</button>}
   {/* {isVisible && <FaArrowUp onClick={scrollToTop}/>} */}

    </div>
  );
};

export default Scroller;
