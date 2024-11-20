import React from 'react';
import "./Socials.css";
import github from "../../assets/images/github-icon.png";

const Socials = () => {
  return (
    <div>
      <div className="" style={{ fontFamily: "Phonk", fontSize: "4rem" }}>SOCIALS</div>
      <a href='/'>
        <img src={github} style={{ width: "70px", height: "70px" }} className='social-icon' />
      </a>
    </div>
  )
}

export default Socials