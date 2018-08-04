import React, { Component } from 'react';
import { connect } from 'react-redux';

import Headline from '../components/headline/Headline';
import Mapbox from '../components/mapbox/Mapbox';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import ArticleItem from '../components/article/article-item/Article-Item';

import { fetchArticle } from '../../actions/Article-Actions';
import { fetchHeadline, flushHeadline } from '../../actions/Headline-Actions';
import { fetchMapbox, flushMapbox } from '../../actions/Mapbox-Actions';

class ArticlePage extends Component {

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.loadData();
    }
  }

  async loadData() {
    await this.props.fetchArticle(this.props.match.params.page, this.props.match.params.name)

    if (this.props.article.headline_id)
      await this.props.fetchHeadline(this.props.article.headline_id);
    else
      this.props.flushHeadline();

    if (this.props.article.map_box_id)
      await this.props.fetchMapbox(this.props.article.map_box_id);
    else
      this.props.flushMapbox();
  }

  render() {
    return (
      <div>
        {this.props.article.fetched && this.props.headline.fetched && <Headline headline={this.props.headline} />}
        {this.props.article.fetched && this.props.mapbox.fetched && <Mapbox mapbox={this.props.mapbox} />}

        {this.props.article.fetched && <Breadcrumbs />}

        {/* TODO: Article */}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.articleStore,
    headline: state.headlineStore,
    mapbox: state.mapboxStore,
  }
}


export default connect(mapStateToProps, { fetchArticle, fetchHeadline, flushHeadline, fetchMapbox, flushMapbox })(ArticlePage);
