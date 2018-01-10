const request = require('request');
const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		a: {
		  demand: true,
		  alias: 'address',
		  describe: 'Address to fetch weather for',
		  string: true 
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
	if (errorMessage) {
		console.log(errorMessage);
	} else {
		console.log(results.address);
		console.log(`Latitude: ${results.latitude}`);
		console.log(`Longitude: ${results.longitude}`);
		weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResults) => {
			if (errorMessage) {
				console.log(errorMessage);
			} else {
				console.log(`It's currently ${weatherResults.temperature}°C. It feels like ${weatherResults.apparentTemperature}°C.`)
			}
		});
	}
});

