import React from 'react';

// local
import TNTFooter from './TNTFooter';
import TNTVisionBanner from './TNTVisionBanner';

// local data
const supportData = require('../supportData/supportData.json');

const VisionHeader = () => {
  return (
    <div className="vision-header">
      <div className="vision-header-text">
        {supportData['vision-header']}
      </div>
    </div>
  );
};

const TNTVision = (props) => {
  return (
    <div>
      <VisionHeader />
      <TNTVisionBanner header={supportData['tnt-vision-banner-header']} text={supportData['tnt-vision-banner-text']} />
      <TNTFooter />
    </div>
  );
};

export default TNTVision;
