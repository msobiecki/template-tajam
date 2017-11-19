import React from 'react';

import './Footer-copyright.sass';

function FooterCopyright() {
  return (
    <div className="footer-copyright">
      <div className="footer-copyright__item">
        <a href="#" className="footer-copyright__link">HELP</a>
        <a href="#" className="footer-copyright__link">TERMS & CONDITION</a>
        <a href="#" className="footer-copyright__link">PRIVACY</a>
      </div>
      <div className="footer-copyright__item">
        <div className="footer-copyright__text">Copyright © 2015 - Tajem Creative</div>
      </div>
    </div>
  );
}

export default FooterCopyright;
