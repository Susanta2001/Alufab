import React, { useState } from "react";
import "../csstwo/ScrollAni.css";

function ScrollAni() {
  const scrollData = [
    {
      title: "Our Mission",
      supportText: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Our Objective",
      supportText: "Our objective is to inspire growth and innovation.",
    },
    {
      title: "Our Vision",
      supportText: "We envision a future of success and sustainability.",
    },
    {
      title: "Our Values",
      supportText: "Integrity, innovation, and collaboration are our values.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionActive, setIsTransitionActive] = useState(false);

  const handleClick = () => {
    // Trigger the drop animation
    setIsTransitionActive(true);

    // Wait for animation to complete before changing the content
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scrollData.length);
      setIsTransitionActive(false); // Reset the animation state
    }, 300); // Matches the CSS transition duration
  };

  return (
    <>
      <div className="school-stack d-flex justify-content-around align-items-center my-5">
        {/* Left Container */}
        <div className="school-stack-left-container">
          <div
            className={`our-mission-card ${
              isTransitionActive ? "transition-class" : ""
            }`}
          >
            {scrollData[currentIndex].title}
          </div>
        </div>

        {/* Right Container */}
        <div className="school-stack-right-container d-flex flex-column justify-content-around h-100">
          <div className="stack-card">
            <h2>{scrollData[currentIndex].title}</h2>
            <p>{scrollData[currentIndex].supportText}</p>
          </div>
          <div className="button-div">
            <button onClick={handleClick}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ScrollAni;
