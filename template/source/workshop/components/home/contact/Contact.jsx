import React from 'react';

import './Contact.sass';

import ContactForm from './contact-form/Contact-form';
import ContactClients from './contact-clients/Contact-clients';

function Contact() {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__box">
          <div className="contact__item">
            <ContactForm />
          </div>
          <div className="contact__item">
            <ContactClients />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
