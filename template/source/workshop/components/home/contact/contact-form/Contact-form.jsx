import React from 'react';

import './Contact-form.sass';

function ContactForm() {
  return (
    <div className="contact-form">
      <h3 className="contact-form__title">GIVE US A GOOD NEWS</h3>
      <div className="contact-form__content">
        <form className="contact-form__form">
          <div className="contact-form__row">
            <label className="contact-form__label" htmlFor="contact-form__name">
              <input className="contact-form__input" type="text" name="contact-form__name" id="contact-form__name" placeholder="Name" />
            </label>
          </div>
          <div className="contact-form__row">
            <label className="contact-form__label" htmlFor="contact-form__email">
              <input className="contact-form__input" type="email" name="contact-form__email" id="contact-form__email" placeholder="Email" />
            </label>
          </div>
          <div className="contact-form__row">
            <label className="contact-form__label" htmlFor="contact-form__subject">
              <input className="contact-form__input" type="text" name="contact-form__subject" id="contact-form__subject" placeholder="Subject" />
            </label>
          </div>
          <div className="contact-form__row">
            <label className="contact-form__label" htmlFor="contact-form__message">
              <textarea className="contact-form__textarea" type="text" name="contact-form__subject" id="contact-form__message" placeholder="Your message" />
            </label>
          </div>
          <div className="contact-form__navigation">
            <button className="contact-form__button">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
