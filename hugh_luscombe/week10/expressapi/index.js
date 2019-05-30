const express = require('express');
const ejs = require('ejs');
const axios = require('axios');

const PORT = 1337
const URL = 'http://192.168.0.91/api/Jfg2hLyQ3OG93uZjDcXSQh2xeClc06gH3ZMxRRke/lights/';

const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => {
  res.render('home.ejs');
});

server.get('/info', (req, res) => {
  axios.get(URL).then((res) => res.render('info.ejs', {
    state: res.data.state,
    name: res.data.name
  }));
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }`));

// hue IP address 192.168.0.91
// {"username": "Jfg2hLyQ3OG93uZjDcXSQh2xeClc06gH3ZMxRRke"}
// https://192.168.0.91/api/1028d66426293e821ecfd9ef1a0731df/lights
