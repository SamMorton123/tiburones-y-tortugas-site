import React from 'react';

// local data
const supportData = require('../supportData/supportData');

const DonateBlurbTitle = (props) => {
  return (
    <div className="donate-blurb-title"> {props.title} </div>
  );
};
const DonateBlurbText = (props) => {
  return (
    <div className="donate-blurb-text"> {props.text} </div>
  );
};
const DonateBlurbSubtext = (props) => {
  return (
    <div className="donate-blurb-subtext"> {props.subtext} </div>
  );
};
const DonatePhoto = (props) => {
  return (
    <img className="home-banner-image" src={props.photo} alt="Alt" />
  );
};

const DonateBlurb = () => {
  return (
    <div className="donate-container">
      <div className="donate-blurb">
        <DonateBlurbTitle title={supportData.donateBlurbTitle} />
        <DonateBlurbText text={supportData.donateBlurbText} />
        <DonateBlurbSubtext subtext={supportData.donateBlurbSubtext} />
      </div>
      <div className="donate-photo">
        <DonatePhoto photo={supportData.donatePhoto} />
      </div>
    </div>
  );
};

export default DonateBlurb;
