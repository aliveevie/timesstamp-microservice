// index.js
// where your node app starts

// init project
var express = require('express');
const timeConverter = require('./timeFunctions/controller')
const formattedDateTime = require('./timeFunctions/controller')
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/:date", function (req, res) {
  let { date } = req.params;
  
  if(date){
    let unixTimestamp = date.split('-').join('')

    date = new Date(unixTimestamp * 1000)
    if(!isNaN(date.getTime()) && date.getTime() >= 0){
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const weekday = weekdays[date.getUTCDay()];
      const day = date.getUTCDate();
      const month = months[date.getUTCMonth()];
      const year = date.getUTCFullYear();
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const seconds = date.getUTCSeconds();
      const formattedDateTime = `${weekday}, ${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    res.json({"unix": Number(unixTimestamp), "utc":formattedDateTime})
    }else{
      res.json({"error":"Invalid Date"});
    }
  }else{
    res.redirect('/api')
  }
});

app.get('/api', (req, res, next) => {

      const date = new Date()

      const unixTimestamp = Math.floor(date.getTime() / 1000);

  // Create an array of weekday names and month names
  
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const weekday = weekdays[date.getUTCDay()];
      const day = date.getUTCDate();
      const month = months[date.getUTCMonth()];
      const year = date.getUTCFullYear();
      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();
      const seconds = date.getUTCSeconds();
  
      
      const formattedDateTime = `${weekday}, ${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} GMT`;

    res.json({"unix": unixTimestamp, "utc":formattedDateTime})

    });





// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
