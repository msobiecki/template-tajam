import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home/Home';
// import Roster from './roster/Roster';
// import Schedule from './schedule/Schedule';

function Content() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path='/roster' component={Roster} />
          <Route path='/schedule' component={Schedule} /> */}
      </Switch>
    </div>
  );
}

export default Content;
