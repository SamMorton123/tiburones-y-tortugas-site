import React from 'react';
// import {
//   BrowserRouter as Router, Route, Switch, NavLink,
// } from 'react-router-dom';

// local
import TNTBanner from './TNTBanner';

const App = (props) => {
  return (
    <div>
      <TNTBanner />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
          <Route component={FallBack} />
        </Switch>
      </Router> */}
    </div>
  );
};

export default App;
