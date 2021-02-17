import React from 'react';

const TNTHomeBannerMessage = (props) => {
  return (
    <div className="home-banner-message">
      <div className="home-banner-title">
        {props.title}
      </div>
      <div className="home-banner-text">
        {props.text}
      </div>
    </div>
  );
};

export default TNTHomeBannerMessage;
