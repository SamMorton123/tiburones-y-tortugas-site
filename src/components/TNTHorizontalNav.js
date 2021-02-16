import React from 'react';

// local
import TNTNavLink from './TNTNavLink';

const TNTHorizontalNav = (props) => {
  return (
    <div className="tnt-horizontal-nav">
      <TNTNavLink exact="1" linkName="/" navName="Home" />
      <TNTNavLink exact="2" linkName="/opportunities" navName="Opportunities" />
      <TNTNavLink exact="2" linkName="/news" navName="News" />
      <TNTNavLink exact="2" linkName="/partners" navName="Partners" />
      <TNTNavLink exact="2" linkName="/gallery" navName="Gallery" />
      <TNTNavLink exact="2" linkName="/contact" navName="Contact Us" />
    </div>
  );
};

export default TNTHorizontalNav;
