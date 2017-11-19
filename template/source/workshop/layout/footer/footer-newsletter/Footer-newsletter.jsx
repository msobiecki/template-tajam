import React from 'react';

import './Footer-newsletter.sass';
import IconPlane from 'react-icons/lib/io/ios-paperplane-outline';


function FooterNewsletter() {
  return (
    <div className="footer-newsletter">
      <h3 className="footer-newsletter__title">STAY IN TOUCH</h3>
      <div className="footer-newsletter__content">
        <form className="footer-newsletter__form">
          <div className="footer-newsletter__inputbox">
            <input className="footer-newsletter__input" type="email" name="footer-newsletter-email" placeholder="Subscribe our newsletter" required />
            <button className="footer-newsletter__button">
              <IconPlane size={30} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FooterNewsletter;
