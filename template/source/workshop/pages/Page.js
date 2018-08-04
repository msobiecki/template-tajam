import React, { Component } from 'react';
import { connect } from 'react-redux';

import Headline from '../components/headline/Headline';
import Mapbox from '../components/mapbox/Mapbox';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs';
import Textpage from '../components/textpage/Textpage';
import ArticleList from '../components/article/article-list/Article-List';

import { fetchPage } from '../../actions/Page-Actions';
import { fetchHeadline, flushHeadline } from '../../actions/Headline-Actions';
import { fetchMapbox, flushMapbox } from '../../actions/Mapbox-Actions';
import { fetchArticles, flushArticles } from '../../actions/Articles-Actions';

class Page extends Component {

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.loadData();
    }
  }

  async loadData() {
    await this.props.fetchPage(this.props.match.params.page)

    if (this.props.page.headline_id)
      await this.props.fetchHeadline(this.props.page.headline_id);
    else
      this.props.flushHeadline();

    if (this.props.page.map_box_id)
      await this.props.fetchMapbox(this.props.page.map_box_id);
    else
      this.props.flushMapbox();


    if (this.props.page.id && this.props.page.page_type_id === 2)
      await this.props.fetchArticles(this.props.page.id);
    else
      this.props.flushArticles();
  }

  render() {
    return (
      <div className="page">

        {this.props.page.fetched && this.props.headline.fetched && <Headline headline={this.props.headline} />}
        {this.props.page.fetched && this.props.mapbox.fetched && <Mapbox mapbox={this.props.mapbox} />}

        {this.props.page.fetched && <Breadcrumbs />}

        {this.props.page.fetched && <Textpage textpage={this.props.page} />}

        {this.props.page.fetched && this.props.articles.fetched && this.props.page.page_type_id === 2 && <ArticleList articles={this.props.articles.data} />}

      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    page: state.pageStore,
    headline: state.headlineStore,
    mapbox: state.mapboxStore,
    articles: state.articlesStore
  }
}


export default connect(mapStateToProps, { fetchPage, fetchHeadline, flushHeadline, fetchMapbox, flushMapbox, fetchArticles, flushArticles })(Page);
