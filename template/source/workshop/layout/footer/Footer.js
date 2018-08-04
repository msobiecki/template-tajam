import React from "react";

import "./Footer.sass";
import BackgroundImage from "../../../images/footer-background.jpg";

import FooterBrand from "./footer-brand/Footer-Brand";
import FooterInfo from "./footer-info/Footer-Info";
import FooterNewsletter from "./footer-newsletter/Footer-Newsletter";
import FooterSocial from "./footer-social/Footer-Social";
import FooterCopyright from "./footer-copyright/Footer-Copyright";

export default function Footer({ footer, sendNewsletter, stateNewsletter }) {
  return (
    <footer className="footer">
      <div className="footer__overlay">
        <img className="footer__background" src={BackgroundImage} alt="Footer Background" />
      </div>
      <div className="footer__content">
        <div className="footer__container">
          <div className="footer__box">
            <div className="footer__item">
              <FooterBrand brand={footer.brand} />
            </div>
            <div className="footer__item">
              <FooterInfo info={footer.info} />
            </div>
            <div className="footer__item">
              <FooterNewsletter newsletter={footer.newsletter} onSubmit={sendNewsletter} stateNewsletter={stateNewsletter} />
              <FooterSocial social={footer.social} />
            </div>
            <div className="footer__item -long">
              <FooterCopyright copyright={footer.copyright} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
