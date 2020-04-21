import React from 'react';
import Landing from './Landing';
import Demonstrations from './Demonstrations';
import './App.css';
import Arrow from 'react-arrow'
// ssh -i C:/Users/vstef/.ssh/id_rsa_vps2 stefan@142.93.241.100
 



function App() {
  let element = (
    <Arrow
        direction="down"
        shaftWidth={15}
        shaftLength={35}
        headWidth={45}
        headLength={30}
        fill='#90FCF9'
        stroke="#90FCF9"
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
