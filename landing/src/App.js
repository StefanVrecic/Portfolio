import React from 'react';
import Landing from './Landing';
import Demonstrations from './Demonstrations';
import './App.css';
import Arrow from 'react-arrow'
 



function App() {
  let element = (
    <Arrow
        direction="down"
        shaftWidth={15}
        shaftLength={35}
        headWidth={45}
        headLength={30}
        fill='#CACACA'
        stroke="#CACACA"
        strokeWidth={3}
    />
  );

  return (
    <div className="App">
      <div>
        <Landing/>
        <div className="bottom-arrow">
          {element}
          <span> </span>
          {element}
        </div>
      </div>
      <div className="test">
      <Demonstrations></Demonstrations>
      </div>
    </div>
  );
}

export default App;
