import React from 'react';
import Landing from './Landing';
import Demonstrations from './Demonstrations';
import './App.css';
import Arrow from 'react-arrow';
import axios from "axios";

import io from 'socket.io-client';
const socket = io('http://localhost:3000');
io.connect();
socket.emit("test");
// ssh -i C:/Users/vstef/.ssh/id_rsa_vps2 stefan@142.93.241.100
 
socket.on('hey', function(){
  console.log("test");
});

const instance = axios.create({
  baseURL: "http://localhost:3000"
});


function App() {
  // alert(window.screen.width);
  // alert(window.screen.height);
  let element = (
    <Arrow
        direction="down"
        shaftWidth={15}
        shaftLength={35}
        headWidth={45}
        headLength={30}
        // fill='#90FCF9'
        fill='#5BC0BE'
        stroke="#5BC0BE"
        // stroke="#90FCF9"
        strokeWidth={3}
    />
  );

  function test() {
    return;
    instance
    .get("/test")            
    .then(function(response) {
      alert(response.data);
    })
    .catch(function(error) {
      alert(error);
    });

    // window.scrollBy({
    //   top: window.innerHeight,
    //   behavior: 'smooth'
    // });
  }

  return (
    <div className="App">
      <div>
        <Landing/>
        <div onClick={test} className="bottom-arrow">
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
