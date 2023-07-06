import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2mc8nsq', 'template_rpcfsp6', form.current, '2u9UeMNvQcn-VM4et')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container cont__container">
        <div className="cont__options">
          <article className="cont__option">
            <MdOutlineEmail className='cont__option-icon'/>
            <h4>Email</h4>
            <h5>digvijaysinghdhanta@gmail.com</h5>
            <a href="mailto:digvijaysinghdhanta@gmail.com">Send a message</a>
          </article>
          <article className="cont__option">
            <BsLinkedin className='cont__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Digvijay Singh</h5>
            <a href="https://www.linkedin.com/in/digvijaysinghdeora/" target='_blank'>Send a message</a>
          </article>
          <article className="cont__option">
            <FaGithub className='cont__option-icon'/>
            <h4>Github</h4>
            <h5>Digvijay Singh</h5>
            <a href="https://github.com/digvijaysinghdhanta" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}


export default Contact
