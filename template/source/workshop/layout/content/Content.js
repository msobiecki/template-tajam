import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./Content.sass"

import HomePage from "../../pages/Home-Page";

import Page from "../../pages/Page";
import Article from "../../pages/Article-Page";

import Page404 from "../../pages/Page404-Page";

class Content extends Component {
  render() {
    return (
      <Switch className="content">
        <Route exact path="/" component={HomePage} />

        <Route exact path="/page/:page" component={Page} />
        <Route exact path="/page/:page/article/:name" component={Article} />

        <Route component={Page404} />
      </Switch>
    );
  }
}

export default Content;
