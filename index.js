var request = require('request');

let url = "http://www.sony.com";
request.get({ url, time: true }, function (err, response) {
    console.log('The actual time elapsed fetching ' + url + ':', response.elapsedTime);
});