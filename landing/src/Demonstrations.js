import React from 'react';
import PortfolioItem from './PortfolioItem';
import "./Demonstrations.css";
import { desc1, desc2, desc3, desc4 } from './importdesc';
import { link1, link2, link3, link4 } from './importdesc';
var item = require('./td2.png');
var item2 = require('./vek32.png');
var item3 = require('./b1.png');
var item4 = require('./chrome-wiki2.png');

const Demonstrations = ( props ) => {
    return (
        <div className="demonstrations">
            <PortfolioItem 
                           description={desc1} 
                           imagePath={item} 
                           appLink={link1}>
            </PortfolioItem>
            <PortfolioItem 
                            description={desc2} 
                            imagePath={item2} 
                            appLink={link2}>
            </PortfolioItem>
            <PortfolioItem 
                            description={desc3} 
                            imagePath={item3} 
                            appLink={link3} 
                            codeLink="https://github.com/StefanVrecic/Bugoffjs">
            </PortfolioItem>
            <PortfolioItem 
                            description={desc4} 
                            imagePath={item4} 
                            appLink="https://youtu.be/lvJ-G5boMk4" 
                            codeLink={link4}>
            </PortfolioItem>
           
        </div>
        );
}

export default Demonstrations;
