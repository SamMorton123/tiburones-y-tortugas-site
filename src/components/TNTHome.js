import React from 'react';

// local imports
import staticHomeImage1 from '../supportData/panama-puffer.jpg';
import staticHomeImage2 from '../supportData/rainbow.jpg';
import staticHomeImage3 from '../supportData/rainforest-butterflies.jpg';
import TNTFooter from './TNTFooter';
import TNTHomeBanner from './TNTHomeBanner';

// local data
const supportData = require('../supportData/supportData.json');

// prepare props for each homepage banner
const bannerData1 = {
  bannerId: 'home-banner-1',
  bannerOrder: 'forward',
  imLink: staticHomeImage1,
  imAlt: supportData['image-alt'],
  title: supportData['home-title-1'],
  text: supportData['home-text-1'],
};
const bannerData2 = {
  bannerId: 'home-banner-2',
  bannerOrder: 'reverse',
  imLink: staticHomeImage2,
  imAlt: supportData['image-alt'],
  title: supportData['home-title-2'],
  text: supportData['home-text-2'],
};
const bannerData3 = {
  bannerId: 'home-banner-3',
  bannerOrder: 'forward',
  imLink: staticHomeImage3,
  imAlt: supportData['image-alt'],
  title: supportData['home-title-3'],
  text: supportData['home-text-3'],
};

const TNTHome = (props) => {
  return (
    <div className="home-page">
      <TNTHomeBanner bannerData={bannerData1} />
      <TNTHomeBanner bannerData={bannerData2} />
      <TNTHomeBanner bannerData={bannerData3} />
      <TNTFooter />
    </div>
  );
};

export default TNTHome;
