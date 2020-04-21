import React from 'react';
import './Styles.css';


const Landing = ( props ) => {
    return (
        <div className="outer">
        <div className="middle">
          <div className="intro">
              <h1 className="intro-name">Hello! My name is <span className="intro-stefan">Stefan Vrecic</span></h1>
                  <h2 className="intro-subtitle">I am a web developer</h2>
                  {/* <p className="intro-pg">Take a look at my latest projects on my <b><u>web portfolio page</u></b></p> */}
                   <br/><br/>
                  <p className="intro-pg-2">Download my resume <a href="/cv.pdf" download="Stefan-CV.pdf"> <b><u >here</u></b></a>
                  <br></br><br></br>
                  <p className="intro-pg">Scroll down to see my latest projects</p>
                   Email me: <a href="mailto:vstefan9@gmail.com"><b><u>vstefan9@gmail.com</u></b></a></p>
          <p className="intro-pg">Check out my <a href="https://github.com/StefanVrecic/"><b><u>GitHub</u></b></a></p>
         </div>
        </div>
        </div>
    );
};

export default Landing;
