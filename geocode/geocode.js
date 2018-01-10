const request = require('request');

var geocodeAddress = (address, callback) => {

	var encodedAddress = encodeURIComponent(address);

	var apiKey = "API_KEY_HERE";

	request({
	url: `https://maps.googleapis.com/maps/api/geocode/json?key=${apiKey}&address=${encodedAddress}&sensor=true`,
	json: true
}, (error, response, body) => {
	/*var postal_town = body.results[0].address_components.filter((component) => component.types[0] === "postal_town")[0].long_name;
	var postal_code = body.results[0].address_components.filter((component) => component.types[0] === "postal_code")[0].long_name;
	console.log(`Town : ${postal_town}`);
	console.log(`Postal Code : ${postal_code}`);*/
	if (error) {
		callback('Unable to connect to Google Servers');
	} else if (body.status == "ZERO_RESULTS") {
		callback('Unable to find that address');
	} else if (body.status == "OK") {
		callback(undefined, {
			address: body.results[0].formatted_address,
			latitude: body.results[0].geometry.location.lat,
			longitude: body.results[0].geometry.location.lng
		});
	}
});
}


module.exports = {
	geocodeAddress
} 