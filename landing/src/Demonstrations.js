import React from 'react';
import PortfolioItem from './PortfolioItem';
import "./Demonstrations.css";

const Demonstrations = ( props ) => {
    return (
        <div className="demonstrations">
            <PortfolioItem imagePath="./Tdronez.png" appLink="www.tdronez.com"></PortfolioItem>
            <PortfolioItem appLink="http://vrecic-bugsquash-project.herokuapp.com/login" codeLink="https://github.com/StefanVrecic/Bugoffjs"></PortfolioItem>
            <PortfolioItem></PortfolioItem>
        </div>
        );
}

export default Demonstrations;
