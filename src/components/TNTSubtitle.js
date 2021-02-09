import React from 'react';

// local data
const supportData = require('../supportData/supportData');

const TNTSubtitle = (props) => {
  const subtitle = supportData['tnt-subtitle'];
  return (
    <div className="tnt-subtitle">
      {subtitle}
    </div>
  );
};

export default TNTSubtitle;
