import React from 'react'
import "./Footer.css"
import logo from "../../assets/images/logo-1.svg"

const Footer = () => {
  return (
    <div className='footer-bg'>
      <img src={logo} height="100px" width="auto" />
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