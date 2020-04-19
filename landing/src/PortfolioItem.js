import React from "react";
import "./PortfolioItem.css";
import Description from "./Description";
import Hover from "./Hover";
import Cover from "./Cover";

const PortfolioItem = props => {
  let CodeButton = null;
  if (props.codeLink != null) {
    CodeButton = <Hover link={props.codeLink}>Code</Hover>;
  }
  
  return (
    <div className="portfolio-item">
      <Cover>
        <img src={props.imagePath} alt="empty" />

      </Cover>
      <div className="hover-buttons">
          <Hover link={props.appLink}>View</Hover>
            {CodeButton}
        </div>

      <Description>{props.description}</Description>
    </div>
  );
};

export default PortfolioItem;
