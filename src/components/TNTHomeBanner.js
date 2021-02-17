import React from 'react';

// local
import TNTHomeBannerMessage from './TNTHomeBannerMessage';

const TNTHomeBanner = (props) => {
  if (props.bannerData.bannerOrder === 'forward') {
    return (
      <div className="home-banner" id={props.bannerData.bannerId}>
        <TNTHomeBannerMessage title={props.bannerData.title} text={props.bannerData.text} />
        <img className="home-banner-image" src={props.bannerData.imLink} alt={props.bannerData.imAlt} />
      </div>
    );
  } else {
    return (
      <div className="home-banner" id={props.bannerData.bannerId}>
        <img className="home-banner-image" src={props.bannerData.imLink} alt={props.bannerData.imAlt} />
        <TNTHomeBannerMessage title={props.bannerData.title} text={props.bannerData.text} />
      </div>
    );
  }
};

export default TNTHomeBanner;
