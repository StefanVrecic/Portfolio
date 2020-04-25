const express = require('express');
const http = require('http');
const app = express();
const router = new express.Router();
var cors = require('cors');
app.use(cors());
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

const socketio = require('socket.io');
const server = http.createServer(app);
const io = socketio(server);
io.set('origins', 'http://localhost:3000');

   
app.listen(3000);

app.get('/test', function (req, res, next) {
    res.send(""+Math.random() * 100)
  });

  io.on('connect', socket => {
      io.emit('hey');
      console.log('new connection!!');
  });

  io.on('test', socket => {
    console.log('test');
});

