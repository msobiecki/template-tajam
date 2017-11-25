import React from 'react';

import './Contact-clients.sass';
import imgZaraClient from './images/Zara_Logo.png';
import imgBarneysNewYork from './images/1280px-Barneys_New_York_Logo.png';
import imgCalvinKlein from './images/Calvin_klein_logo.png';
import imgConverse from './images/Converse_logo.png';
import imgLevis from './images/1280px-Levis_logo.png';
import imgBillabong from './images/Billabong.png';
import imgPumaLogo from './images/Puma_Logo.png';
import imgNike from './images/1280px-Logo_NIKE.png';
import imgGucci from './images/1280px-Gucci_Logo.png';

function ContactClients() {
  return (
    <div className="contact-clients">
      <h3 className="contact-clients__title">OUR HAPPY CLIENT</h3>
      <div className="contact-clients__content">
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgZaraClient} alt="Zara" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgBarneysNewYork} alt="Barneys New York" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgCalvinKlein} alt="Calvin Klein" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgConverse} alt="Converse" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgLevis} alt="Mango" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgGucci} alt="GUCCI" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgNike} alt="Nike" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgPumaLogo} alt="Puma" />
        </div>
        <div className="contact-clients__item">
          <img className="contact-clients__image" src={imgBillabong} alt="Bill a Bong" />
        </div>
      </div>
    </div>
  );
}

export default ContactClients;
