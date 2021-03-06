import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

// local
import TNTBanner from './TNTBanner';
import TNTHome from './TNTHome';
import TNTStudentOpportunities from './TNTStudentOpportunities';
import TNTAbout from './TNTAbout';
import TNTDonate from './TNTDonate';
// import TNTNews from './TNTNews';
// import TNTPartners from './TNTPartners';
// import TNTGallery from './TNTGallery';
// import TNTContact from './TNTContact';
import TNTVision from './TNTVision';
import TNTFallBack from './TNTFallback';

const App = (props) => {
  return (
    <div>
      <Router>
        <TNTBanner />
        <Switch>
          <Route exact path="/" component={TNTHome} />
          <Route path="/opportunities" component={TNTStudentOpportunities} />
          <Route path="/about" component={TNTAbout} />
          <Route path="/donate" component={TNTDonate} />
          {/* <Route path="/news" component={TNTNews} />
          <Route path="/partners" component={TNTPartners} />
          <Route path="/gallery" component={TNTGallery} />
          <Route path="/contact" component={TNTContact} /> */}
          <Route path="/vision" component={TNTVision} />
          <Route component={TNTFallBack} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
