# node-weather-cli-app
A command line interface nodejs weather forecasting app. You can pass address, postcode, zipcode and in return you will get the 

## INSTALLATION : 

Just run the following command after `git clone` as : 

    npm install
    
Also add your API KEYS in following files as well : 

Google Maps Geocode API in the following file as:

    /geocode/geocode.js
    
[Forecast.io](http://www.forecast.io) API KEY in the following file as:

    /weather/weather.js

## USAGE :

You can use following commands to interact with the app through command line :

Help Flag to show all available commands :

    node app.js --help

Or with the following one command as well : 

    node app.js -a --help
    
**NOTE:** Use either `--address` or `-a` as argument

Get Full Address & Weather Forecast Info Of The Address : 

    node app.js add --address="ADDRESS/POSTCODE/ZIPCODE"
    
    

