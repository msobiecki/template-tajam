import React from 'react';

import './Footer-info.sass';
import IconMarker from 'react-icons/lib/io/ios-locatoutline';
import IconPhone from 'react-icons/lib/io/ios-telephone-outline';

function FooterInfo() {
  return (
    <div className="footer-info">
      <h3 className="footer-info__title">OUR STUDIO</h3>
      <div className="footer-info__list">
        <div className="footer-info__item">
          <div className="footer-info__icon">
            <IconMarker size={22} />
          </div>
          <div className="footer-info__text">
            Ruko cucruk, Jl. Radio luar delem jos No.12 - 13, Kalideres - Jakarta Barat 11480 - Indonesia
          </div>
        </div>
        <div className="footer-info__item">
          <div className="footer-info__icon">
            <IconPhone size={22} />
          </div>
          <a href="tel:+622122243333" className="footer-info__text">
            (+62) 21-2224 3333
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterInfo;
