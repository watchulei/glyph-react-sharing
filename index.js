const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

// Serve front-end
app.use('/', express.static(path.join(__dirname, 'app')));
app.use('/classdemo', express.static(path.join(__dirname, 'app')));
app.use('/user/:name', express.static(path.join(__dirname, 'app')));

const server = http.createServer(app);
server.listen(8000, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log('Listening at http://%s:%s', host, port);
});
