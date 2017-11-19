import React from 'react';

import './Footer-brand.sass';
import FooterBrandImage from './images/logo.png';


function FooterBrand() {
  return (
    <div className="footer-brand">
      <div className="footer-brand__logobox">
        <img src={FooterBrandImage} alt="Tajm" />
      </div>
      <div className="footer-brand__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus nisl at neque dictum mollis. Donec nisi magna, molestie imperdiet viverra non, porta in erat. Etiam ultricies lobortis diam, nec scelerisque eros ornare non.
      </div>
    </div>
  );
}

export default FooterBrand;
