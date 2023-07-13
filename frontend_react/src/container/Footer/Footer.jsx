import React, { useState } from 'react';

import Typewriter from 'typewriter-effect'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';


const Footer = () => {
  const [formData, setFormData] = useState({ contact: '', name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { contact, username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      contact: formData.contact,
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };


      client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
    <h2 className="text2">
            <Typewriter
            options={{
              strings: [      
              'Thanks for taking the time to look through my site!',
              'Do not be shy... Feel free to contact me',
              'I will respond ASAP',
              'Hope you have a splendid day ❤️'],
              autoStart: true,
              delay: 20,
              loop: true,
            }}
          />
    </h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.github} alt="github" />
          <a href="https://github.com/Oretheus" className="p-text"></a>
        </div>
        <div className="app__footer-card ">
          <img src={images.gmail} alt="gmail" />
          <a href="mailto:azawah03@gmail.com" className="colortext">azawah03@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.discord} alt="discord" />
          <a href="https://discord.gg/teS5KyKreR" className="p-text"></a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="contactBox">
            <select
              className="input"
              name="contact"
              value={contact}
              onChange={handleChangeInput}
              required
            >
              <option value="">Select Contact Method</option>
              <option value="discord">Discord</option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="app__flex">
            <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} required/>
          </div>
          <div className="app__flex">
            <input className="p-text" type="contact" placeholder="Your Preferred Contact Method" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
              Thanks for reaching out...<br></br> I'll reply ASAP!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
