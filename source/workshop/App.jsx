import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import styles from './App.sass';

import Header from './layout/header/Header';
import Content from './components/Content';
import Footer from './layout/footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper" data-reactroot>
          <Header />
          <Content />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
