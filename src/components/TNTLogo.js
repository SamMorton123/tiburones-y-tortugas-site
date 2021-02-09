import React from 'react';

// local data
const supportData = require('../supportData/supportData');

const TNTLogo = (props) => {
  // grab logo
  const logo = supportData['tnt-logo-path'];

  return (
    <div className="tnt-logo">
      <img src={logo} alt="TnT Logo" />
    </div>
  );
};

export default TNTLogo;
