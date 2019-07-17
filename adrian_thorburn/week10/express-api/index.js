const express = require('express');
const ejs = require('ejs');
const weather = require('weather-js');

const PORT = 1337;
// weather.setLang('en');
//
// // set city by name
// weather.setCity('Sydney');
//
// // 'metric'  'internal'  'imperial'
// weather.setUnits('metric');
//
// // check http://openweathermap.org/appid#get for get the APPID
// weather.setAPPID(7d9ba91ae33f813b901a2b37f72aaac5);



weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
if(err) console.log(err);

console.log(JSON.stringify(result, null, 2));
});

weather.find({search: 'Sydney, AU', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
  console.log(JSON.stringify(result, null, 2));
});


const server = express();
server.set('view-engine', 'ejs');

server.get('/', (req, res) => {
  weather.find({search: 'Sydney, Australia', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);
    console.log(JSON.stringify(result, null, 2));
  });

  res.render('index.ejs', result);
});

server.get('/info/', (req, res) => {
  res.render('info.ejs');
})

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
