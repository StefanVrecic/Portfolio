import React from "react";
import "./PortfolioItem.css";
import Description from "./Description";
import Hover from "./Hover";
import Cover from "./Cover";

const PortfolioItem = props => {
  let CodeButton = null;
  // Re-factor this mess!
  if (props.codeLink != null) {
    CodeButton = <Hover link={props.codeLink}>Code</Hover>;
  }
  let view = null;
  if (props.appLink != null) {
    view = <Hover link={props.appLink}>View</Hover>;
  }
  let firstView = null;
  if (props.firstView != null) {
    firstView = <Hover link={props.firstView}>First</Hover>;
  }
  let secondView = null;
  if (props.secondView != null) {
    secondView = <Hover link={props.secondView}>Second</Hover>;
  }
  let thirdView = null;
  if (props.thirdView != null) {
    thirdView = <Hover link={props.thirdView}>Third</Hover>;
  }
  return (
    <div className="portfolio-item">
      <Cover>
        <img src={props.imagePath} alt="empty" />

      </Cover>
      <div className="hover-buttons">
           {view}
            {CodeButton}
            {firstView}
            {secondView}
            {thirdView}
        </div>

      <Description>{props.description}</Description>
    </div>
  );
};

export default PortfolioItem;
