import React from 'react';

import './Article-List.sass';

import ArticleListItem from "./article-list-item/Article-List-Item"


export default function ArticleList({ articles }) {

  const items = (() => {
    return Object.keys(articles).map((key, index) => {
      return (
        <ArticleListItem key={index} article={articles[key]} />
      )
    })
  })
  console.log(articles)
  return (
    <div className="article-list">
      <div className="article-list__container">
        <div className="article-list__box">
          {items()}
        </div>

        <div className="article-list__footer">
          <div className="article-list-stack">
            STACK
            </div>
          <div className="article-list-pagination">
            PAGINATION
            </div>
        </div>
      </div>
    </div>
  );
}
