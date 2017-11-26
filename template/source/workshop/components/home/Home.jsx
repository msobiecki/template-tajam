import React from 'react';

import Contact from './contact/Contact';
import Testimonials from './testimonials/Testimonials';

function Home() {
  return (
    <div className="home">
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
