import React from "react";

import "./Footer-Info.sass";

import FooterInfoItem from "./footer-info-item/Footer-Info-Item"

export default function FooterInfo({ info }) {

  const item = () => {
    return info.data.map((element, index) => {
      return (
        <FooterInfoItem key={index} value={element} />
      )
    })
  }

  return (
    <div className="footer-info">
      <h3 className="footer-info__title">{info.title}</h3>
      <div className="footer-info__list">
        {item()}
      </div>
    </div>
  );
}
