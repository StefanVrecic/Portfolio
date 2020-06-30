const express = require('express');
const bodyParser = require("body-parser")
const app = express();
const router = new express.Router();
const cors = require('cors');

app.use(bodyParser.json())
app.use(cors());
 
app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(3000);

app.get('/test', function (req, res, next) {
  res.send(""+Math.random() * 100)
});

app.post("/hook", (req, res) => {
  console.log(req.body) // Call your action on the request here
  res.status(200).end() // Responding is important
})

// http://142.93.241.100:3000/hook