import React from "react";
import "./PortfolioItem.css";
import Description from "./Description";
import Hover from "./Hover";
import Cover from "./Cover";
// var item1 = require('./item1.png');
var item = require('./Tdronez.png');

const PortfolioItem = props => {
  let CodeButton = null;
  if (props.codeLink != null) {
    CodeButton = <Hover link={props.codeLink}>Code</Hover>;
  }
  
  return (
    <div className="portfolio-item">
      <Cover>
        <img src={item} alt="empty" />
        <div className="hover-buttons">
          <Hover link={props.appLink}>View</Hover>
            {CodeButton}
        </div>
      </Cover>

      <Description>{props.description}</Description>
    </div>
  );
};

export default PortfolioItem;
