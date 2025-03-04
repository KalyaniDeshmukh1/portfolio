import React, {useRef} from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0fcplsm', 'template_ewyo50v', form.current, {publicKey: 'RFsQzQ5I5SLv0y4sQ',})
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
  return (
    <div id='ContactPage'>
        <h1 className='contactPageTitle'> Contact Me </h1>
        <span className='contactDesc'> Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input className='name' type='text' placeholder='Your name'name='from_name'/>
            <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' rows="5" placeholder='Your Message...'></textarea>
            <button type='submit' value='send' className='submitBtn' >Submit</button>
            <div className='links'>
                <img src='./LinkedIn.jpeg' className='link' alt='LinkedIn'></img>
                <img src='./Instagram.jpeg' className='link'alt='Instagram'></img>
                <img src='./Whatsapp.png' className='link' alt='Whatsapp'></img>
            </div>
        </form>

    </div>
  )
}

export default Contact;