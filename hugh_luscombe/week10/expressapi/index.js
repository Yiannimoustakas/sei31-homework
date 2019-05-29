const express = require('express');
const ejs = require('ejs');
const axios = require('axios');
const secrets = require('dotenv').config();


const PORT = 1337
const username = process.env.MYAPIUSERNAME
const URL = `http://192.168.0.91/api/${ username }/lights/`;

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
