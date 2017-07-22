require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.NODE_PORT;

//express
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

//route
app.post('/hello', (req, res) => {
  if (req.body.name)
    res.send(`Hello ${req.body.name}`);
  else
    res.send('Hello World');
});

//start app
app.listen(port);
console.log(`Express is listening on port ${port}`);