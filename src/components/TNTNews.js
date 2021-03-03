import React from 'react';

// local
import Newsfeed from './Newsfeed';

// local data
const newsData = require('../supportData/newsData.json');

const TNTNews = (props) => {
  return (
    <Newsfeed newsData={newsData} />
  );
};

export default TNTNews;
