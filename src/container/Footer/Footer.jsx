import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">10A Kalolankatu, 20100, Turku, Finland </p>
        <p className="p__opensans">+35865676021</p>  
        <p className="p__opensans">+35812345677</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.huan} alt="footer_logo"/>
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className="spoon__img" style={{marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook/>
          <FiInstagram/>
          <FiTwitter/>
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday: </p>
          <p className="p__opensans">10:00am - 11:00pm</p>  
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">8:00am - 12:00am</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 huan's. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
