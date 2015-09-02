## Development

``
git clone ...
npm install
npm start
``

Then open [http://localhost:8080](http://localhost:8080).
(open http://127.0.0.1:8080 if the above doesnt show).

## Deployment

1. Install webpack:

``npm install -g webpack``

2. Build

``npm run clean && NODE_ENV=production webpack -p --config webpack.production.js``

3. Upload result in ``public`` folder

## TODOs

1. manufacture -> dropdown menu, from server
2. device name -> dropdown menu, from server
3. mac address -> user input box
4. country name -> dropdown, static list

- an add button if manu or device not listed 
- Error checking
- a help button on the macaddress depends on the manufact displays a pop-up that explains how to find the mac address on the os (ios android )

