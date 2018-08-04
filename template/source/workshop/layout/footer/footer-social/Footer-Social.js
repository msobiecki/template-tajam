import React from "react";

import "./Footer-Social.sass";

import IconFacebook from "react-icons/lib/io/social-facebook";
import IconTwitter from "react-icons/lib/io/social-twitter";
import IconDribbble from "react-icons/lib/io/social-dribbble";
import IconInstagram from "react-icons/lib/io/social-instagram";
import IconGoogleplus from "react-icons/lib/io/social-googleplus";
import IconYoutube from "react-icons/lib/io/social-youtube";


export default function FooterSocial({ social }) {

  const item = () => {
    return social.map((element, index) => {
      if (element.url)
        return (
          <a href={element.url} key={index} target="_blank" className="footer-social__item">
            {
              (() => {
                switch (element.type) {
                  case "facebook": return <IconFacebook size={18} />;
                  case "twitter": return <IconTwitter size={18} />;
                  case "dribbble": return <IconDribbble size={18} />;
                  case "instagram": return <IconInstagram size={18} />;
                  case "googleplus": return <IconGoogleplus size={18} />;
                  case "youtube": return <IconYoutube size={18} />;
                }
              })()
            }
          </a>
        )
    })
  }

  return (
    <div className="footer-social">
      {item()}
    </div>
  );
}
