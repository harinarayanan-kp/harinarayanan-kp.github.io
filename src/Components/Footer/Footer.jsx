import React, { useRef, useState } from 'react'
import "./Footer.css"
// import logo from "../../assets/images/logo-1.svg"
import Lottie from "lottie-react";
import animationData from "../../assets/logo.json";

const Footer = () => {
  return (
    <div className='footer-bg'>
      {/* <img src={logo} height="100px" width="auto" /> */}
      <HoverLottie />
      <div className="footer-sub">
        <ul >
          <li><a href="">Instagram</a></li>
          <li><a href="">Linkedin</a></li>
          <li><a href="">Dribble</a></li>
          <li><a href="">Behance</a></li>
        </ul>
        <ul style={{ alignItems: 'flex-end' }}>
          <li ><a href="">Github</a></li>
          <li><a href="">Gmail</a></li>
          <li><a href="">Whatsapp</a></li>
          <li><a href="">X</a></li>
        </ul>
      </div>
      <div style={{ width: '100%', textAlign: 'center' }}>Copyright © 2024</div>
    </div>
  )
}

export default Footer

const HoverLottie = () => {
  const lottieRef = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true); // Show full animation
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    let frame = currentFrame; // Initialize current frame tracking
    if (lottieRef.current) {
      const totalFrames = animationData.op; // Total frames of the animation
      const interval = setInterval(() => {
        if (frame < totalFrames) {
          frame++;
          setCurrentFrame(frame); // Update the current frame
          lottieRef.current.goToAndStop(frame, true); // Move to next frame
        } else {
          clearInterval(interval); // Stop the loop when the last frame is reached
        }
      }, 1000 / animationData.fr); // Adjust the frame speed
    }
  };

  const handleAnimationComplete = () => {
    setIsHovered(false); // Show last frame after animation completes
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Full animation */}
      {isHovered && (
        <Lottie
          animationData={animationData}
          loop={false}
          lottieRef={lottieRef}
          style={{ width: 250, height: 100 }}
        />
      )}

      {/* Last frame */}
      {!isHovered && (
        <Lottie
          animationData={animationData}
          loop={false}
          initialSegment={[animationData.op - 1, animationData.op]} // Show last frame
          style={{ width: 250, height: 100 }}
        />
      )}
    </div>
  );
};