import React from 'react';

// local
import TitleText from './TitleText';
import TNTSubtitle from './TNTSubtitle';

// local data
const supportData = require('../supportData/supportData');

const TitlePlusLogo = (props) => {
  return (
    <div className="title-subtitle">
      <TitleText title={supportData['tnt-title']} />
      <TNTSubtitle />
    </div>
  );
};

export default TitlePlusLogo;
