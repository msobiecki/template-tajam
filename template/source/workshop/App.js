import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react'

import './App.sass';

import Header from './layout/header/Header';
import Menu from './layout/menu/Menu';
import Content from './layout/content/Content';
import Footer from './layout/footer/Footer';

import { fetchSystem } from '../actions/System-Actions';
import { sendNewsletter } from '../actions/Newsletter-Actions';

class App extends Component {

  state = {
    sidebar: false
  }


  componentDidMount() {
    this.props.fetchSystem();

    window.addEventListener("resize", this.checkSidebarVisibility);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.checkSidebarVisibility);
  }

  sendNewsletter = (newsletter) => {
    console.log(newsletter)
    return this.props.sendNewsletter(newsletter);
  }

  toggleSidebarVisibility = () => {
    this.setState({ sidebar: !this.state.sidebar })
  }

  checkSidebarVisibility = () => {
    if (this.state.sidebar && window.innerWidth > 1024) {
      this.setState({ sidebar: false });
    }
  }

  render() {
    const { sidebar } = this.state
    return (
      <div className="app">
        <Header handleClick={this.toggleSidebarVisibility} />
        <Sidebar.Pushable>
          <Sidebar
            className="sidebar"
            animation='push'
            width='wide'
            visible={sidebar}
            icon='labeled'
            vertical="true"
            inverted="true"
          >
            <Menu />
          </Sidebar>
          <Sidebar.Pusher>
            <Content />
            <Footer footer={this.props.footer} sendNewsletter={this.sendNewsletter} stateNewsletter={this.props.stateNewsletter} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    footer: state.systemStore.footer,
    stateNewsletter: state.newsletterStore
  }
}

export default withRouter(connect(mapStateToProps, { fetchSystem, sendNewsletter })(App));
