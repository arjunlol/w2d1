var https = require('https');
var output = "";


function getAndPrintHTML (options){
  https.get(options, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data){
      output += data;
    })

    response.on('end', function(data){
      console.log(output);
    })
  })
};


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

