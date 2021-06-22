import React from 'react';

// local
import TNTNavLink from './TNTNavLink';

// local data
const supportData = require('../supportData/supportData.json');

const TNTHorizontalNav = (props) => {
  return (
    <div className="tnt-horizontal-nav">
      {supportData['tnt-navlinks'].map((navLinkOb) => {
        return (
          <TNTNavLink exact={navLinkOb.exactMode} linkName={navLinkOb.linkName} navName={navLinkOb.navName} key={navLinkOb.linkName} />
        );
      })}
    </div>
  );
};

export default TNTHorizontalNav;
