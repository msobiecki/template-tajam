import React from 'react';

import './Contact.sass';

import ContactForm from './contact-form/Contact-Form';
import ContactClients from './contact-clients/Contact-Clients';


export default function Contact({ contact, sendContact, stateContact, clients }) {
  return (
    <div className="contact">
      <div className="contact__container">
        <div className="contact__box">
          <div className="contact__item">
            <ContactForm contact={contact} onSubmit={sendContact} stateContact={stateContact} />
          </div>
          <div className="contact__item">
            <ContactClients clients={clients} />
          </div>
        </div>
      </div>
    </div>
  );
}
