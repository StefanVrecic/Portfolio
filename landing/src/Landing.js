import React from 'react';
import './Styles.css';


const Landing = ( props ) => {
    return (
        <div className="outer">
        <div className="middle">
          <div className="intro">
              <h1 className="intro-name">Hello, my name is Stefan Vrecic</h1>
                  <br/>
                  <h3 className="intro-subtitle">I am a full-stack web developer</h3>
                  <p className="intro-pg">Take a look at my latest projects on my <b><u>web portfolio page</u></b></p>
                   
                  <p className="intro-pg-2">Find my resume <a href="/CV.pdf" download="Stefan-CV.pdf"> <b><u >here</u>.</b>
                  </a> Email me: <a href="mailto:vstefan9@gmail.com"><b><u>vstefan9@gmail.com</u></b></a></p>
          <p className="intro-pg">Check out my <a href="https://github.com/StefanVrecic/"><b><u>GitHub</u></b></a></p>
         </div>
        </div>
        </div>
    );
};

export default Landing;
