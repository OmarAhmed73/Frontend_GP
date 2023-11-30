import React from "react";
import '../../pages/style/Contact.css'


const Contact = () => {
  return (
    <div className="hero">
        <form className="contactForm">
          <div className='row'>
             <div className='input-group'>
            <input type="text" id="name" required />
            <label for="name"><i class="fa-solid fa-user"></i> Your Name</label>
          </div>
          <div className='input-group'>
            <input type="text" id="phone" required />
            <label for="phone"><i class="fa-solid fa-phone"></i> Phone Number</label>
          </div>
          </div>
          <div className='input-group'>
            <input type="email" id="email" required />
            <label for="email"><i class="fa-solid fa-envelope"></i> Email</label>
          </div>
          <div className='input-group'>
            <textarea id="message" required rows="10"></textarea>
            <label for="message"><i class="fa-solid fa-message"></i> Your Message</label>
          </div>
          <button type="submit" className="send-button">Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>
    </div>
  )
};

export default Contact;