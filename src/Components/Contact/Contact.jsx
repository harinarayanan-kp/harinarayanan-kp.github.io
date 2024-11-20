import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
      <input className='contact-input' style={{ maxWidth: "600px" }} placeholder='Name' type='text' />
      <input style={{ maxWidth: "600px" }} placeholder='Email' type='email' />
      <input className='contact-input-message' placeholder='Message' type='text' />
    </div>
  )
}

export default Contact