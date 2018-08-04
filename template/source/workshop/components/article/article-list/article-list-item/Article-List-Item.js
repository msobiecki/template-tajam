import React from "react";
import { NavLink } from "react-router-dom";

import './Article-List-Item.sass';

export default function ArticleListItem({ article }) {

  const item = (() => {
    return (
      <div className="article-list-item__content">
        <div className="article-list-item__imagebox">

        </div>
        <div className="article-list-item__details">
          <h3 className="article-list-item__title">
            {article.title}
          </h3>
        </div>
      </div>
    )
  })
  return (
    <div className="article-list-item">
      {
        article.external ?
          <a href={article.href} target="_blank" className="article-list-item__inner">
            {item()}
          </a>
          :
          <NavLink exact to={article.href} className="article-list-item__inner">
            {item()}
          </NavLink>
      }
    </div>
  );
}
