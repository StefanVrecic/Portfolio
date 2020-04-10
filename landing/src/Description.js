import React from 'react';


const Description = props => {
  return (
  <div className="portfolio-item__description">
      <p>
      {props.children}
      </p>
  </div>
  );
};

export default Description;
