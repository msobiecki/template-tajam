import React from 'react';

import Works from './works/Works';
import Testimonials from './testimonials/Testimonials';
import Contact from './contact/Contact';

function Home() {
  return (
    <div className="home">
      <Works />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
