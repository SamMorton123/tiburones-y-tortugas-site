import React from 'react';
import { NavLink } from 'react-router-dom';

// local data
const supportData = require('../supportData/supportData.json');

const ContentLeft = () => {
  return (
    <div className="content-left">
      <div className="content-left-item" id="content-left-special"> {supportData['footer-content-tnt-name']} </div>
      <div className="content-left-item"> {supportData['footer-content-location-name']} </div>
      <div className="content-left-item"> {supportData['footer-content-contact']} </div>
    </div>
  );
};

const ContentRight = () => {
  return (
    <div className="content-right">
      <NavLink className="content-right-navlink" to="/vision" exact> Our Vision </NavLink>
    </div>
  );
};

const TNTFooterContent = (props) => {
  return (
    <div className="tnt-footer-content">
      <ContentLeft />
      <ContentRight />
    </div>
  );
};

export default TNTFooterContent;
