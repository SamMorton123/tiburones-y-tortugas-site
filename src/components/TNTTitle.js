import React from 'react';

// local
import TitleSubtitle from './TitleSubtitle';
import TNTLogo from './TNTLogo';

const TNTTitle = (props) => {
  return (
    <div className="tnt-title">
      <TNTLogo />
      <TitleSubtitle />
    </div>
  );
};

export default TNTTitle;
