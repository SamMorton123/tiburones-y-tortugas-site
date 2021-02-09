import React from 'react';

// local
import TNTNavLink from './TNTNavLink';

// local data
const supportData = require('../supportData/supportData');

const TNTHorizontalNav = (props) => {
  return (
    <div className="tnt-horizontal-nav">
      {supportData['tnt-navlinks'].map((linkName) => (
        <TNTNavLink key={linkName} navName={linkName} />
      ))}
    </div>
  );
};

export default TNTHorizontalNav;
