import React from 'react';
import { NavLink } from 'react-router-dom';

const TNTNavLink = (props) => {
  if (props.exact === '1') {
    return (
      <NavLink className="tnt-navlink" to={props.linkName} exact> {props.navName} </NavLink>
    );
  } else {
    return (
      <NavLink className="tnt-navlink" to={props.linkName}> {props.navName} </NavLink>
    );
  }
};

export default TNTNavLink;
