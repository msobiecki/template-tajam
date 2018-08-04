import React from "react";

import "./Footer-Info-Item.sass";

import IconMarker from "react-icons/lib/io/ios-locatoutline";
import IconPhone from "react-icons/lib/io/ios-telephone-outline";

export default function FooterInfoItem({ value }) {
  return (
    <div className="footer-info-item">
      <div className="footer-info-item__icon">
        {
          (() => {
            switch (value.type) {
              case "location": return <IconMarker size={18} />;
              case "phone": return <IconPhone size={18} />;
            }
          })()
        }
      </div>
      {
        value.link ?
          <a href={"tel:" + value.link} className="footer-info-item__text">
            {value.text}
          </a>
          :
          <div className="footer-info-item__text">
            {value.text}
          </div>
      }
    </div>
  )
}
