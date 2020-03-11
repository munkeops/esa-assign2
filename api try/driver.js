// var Request = require("request");
// var data;
// Request.get("http://localhost:4000/Users/rohan9025", (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     data=JSON.parse(body)
//     console.dir(data);
// });

const http = require('http');
const https = require('https');

// /**
//  * getJSON:  RESTful GET request returning JSON object(s)
//  * @param options: http options object
//  * @param callback: callback to pass the results JSON object(s) back
//  */

const options = {
    host: 'http://loacalhost:4000',
    port: 443,
    path: '/products',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };



module.exports.getJSON = (options, onResult) => {
  console.log('rest::getJSON');
  const port = options.port == 443 ? https : http;

  let output = '';

  const req = port.request(options, (res) => {
    console.log(`${options.host} : ${res.statusCode}`);
    res.setEncoding('utf8');

    res.on('data', (chunk) => {
      output += chunk;
    });

    res.on('end', () => {
      let obj = JSON.parse(output);

      onResult(res.statusCode, obj);
    });
  });

  req.on('error', (err) => {
    // res.send('error: ' + err.message);
  });

  req.end();
};

