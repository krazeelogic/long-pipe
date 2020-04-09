const http = require('http');

const express = require('express')

const hostname = '127.0.0.1';
const port = 2900;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
  //console.log(`KK\n`);
});


/*
const server = http.get({
    hostname: 'localhost',
    port: 80,
    path: '/kk',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Khurram Khokhar');
    });
*/


// App
//const app = express();
//app.get('/', (req, res) => {
  //res.send('Hello World');
  //console.log(`KK\n`);
//});

server.listen(port, hostname, () => {
  console.log(`KK Server running at http://${hostname}:${port}/`);
});