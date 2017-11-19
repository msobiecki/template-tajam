import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.sass';

// import Header from './layout/header/Header';
import Content from './components/Content';
import Footer from './layout/footer/Footer';

function App() {
  return (
    <Router>
      <div className="wrapper">
        {/* <Header />*/}
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
