//function definition now accepts callback as parameter
//function body invokes callback when data fully recieved
var https = require('https');

function getHTML (options, callback){
  https.get(options, function(response){
    response.on('data',callback);
  })
}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
}

getHTML(requestOptions, printHTML);