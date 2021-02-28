import React from 'react';

const TNTVisionBannerInterior = (props) => {
  return (
    <div className="tnt-vision-banner-interior">
      <div id="tnt-vision-banner-header"> {props.header} </div>
      <div id="tnt-vision-banner-text"> {props.text} </div>
    </div>
  );
};

const TNTVisionBanner = (props) => {
  return (
    <div className="tnt-vision-banner">
      <TNTVisionBannerInterior header={props.header} text={props.text} />
    </div>
  );
};

export default TNTVisionBanner;
