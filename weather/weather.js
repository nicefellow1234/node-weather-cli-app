const request = require('request');


var getWeather = (lat, lng, callback) => {
		var apiKey = "API_KEY_HERE";
		request({
		url: `https://api.darksky.net/forecast/${apiKey}/${lat},${lng}`,
		json: true
	}, (error, response, body) => {
		if (error) {
			callback('Unable to connect to Forecast.io Server.');
		} else if (response.statusCode === 400) {
			callback('Unable to fetch weather');
		} else if (response.statusCode === 200) {
			callback(undefined, {
				temperature: Math.round((body.currently.temperature - 32)/1.8),
				apparentTemperature: Math.round((body.currently.apparentTemperature - 32)/1.8)
			});
		}
	});
};



module.exports.getWeather = getWeather;

