import React from "react";

import "./Footer-Brand.sass";

import FooterBrandImage from "../../../../images/logo.png";

export default function FooterBrand({ brand }) {
  return (
    <div className="footer-brand">
      <div className="footer-brand__logobox">
        <img src={FooterBrandImage} alt="Tajm" />
      </div>
      <div className="footer-brand__text">
        {brand.text}
      </div>
    </div>
  );
}
