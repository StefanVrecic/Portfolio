import React from 'react';
import PortfolioItem from './PortfolioItem';
import "./Demonstrations.css";
import { desc1, desc2, desc3 } from './importdesc';
var item = require('./Tdronez.png');
var item2 = require('./vek.png');
var item3 = require('./item1.png');

const Demonstrations = ( props ) => {
    return (
        <div className="demonstrations">
            <PortfolioItem 
                           description={desc1} 
                           imagePath={item} 
                           appLink="https://www.tdronez.com/">
            </PortfolioItem>
            <PortfolioItem 
                            description={desc2} 
                            imagePath={item2} 
                            appLink="https://www.vekinidesign.com">
            </PortfolioItem>
            <PortfolioItem 
                            description={desc3} 
                            imagePath={item3} 
                            appLink="http://vrecic-bugsquash-project.herokuapp.com/login" 
                            codeLink="https://github.com/StefanVrecic/Bugoffjs">
            </PortfolioItem>
           
        </div>
        );
}

export default Demonstrations;
