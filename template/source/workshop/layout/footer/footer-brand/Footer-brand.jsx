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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus nisl at neque dictum mollis. Donec nisi magna, molestie imperdiet viverra non, porta in erat. Etiam ultricies lobortis diam, nec scelerisque eros ornare non. Suspendisse leo ex, bibendum et nunc in, dignissim pellentesque nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam iaculis imperdiet nibh. Quisque a ultrices risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eget nisi vitae nulla tempus vulputate sit amet maximus enim. Etiam in dolor quis neque rhoncus tempus vitae quis erat.
      </div>
    </div>
  );
}

export default FooterBrand;
