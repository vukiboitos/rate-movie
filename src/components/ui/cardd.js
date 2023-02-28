import React from 'react';

import classes from './cardd.module.css';

const Cardd = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Cardd;