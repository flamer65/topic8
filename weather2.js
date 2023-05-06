let request = require('request');

let apiKey = '4361f4b0f508283f35ec63fa3da03d72';
let location = 'melbourne, AU';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`

request(url, function(err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
        let body1 = JSON.parse(body);
        console.log('body:', body1);
    }
});