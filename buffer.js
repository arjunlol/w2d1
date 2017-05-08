var https = require('https');

function getAndPrintHTML (){
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  var output = "";

  https.get(requestOptions, function(response){
    response.setEncoding('utf-8');

    response.on('data', function(data){
      output += data;
    })

    response.on('end', function(data){
      console.log(output);
    })


  })

}
getAndPrintHTML();