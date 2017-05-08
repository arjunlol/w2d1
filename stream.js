var https = require('https');

function getAndPrintHTMLChunks () {

//function will use https to get url
// will console.log each data chunk
//\n each chunk

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function(data){
      console.log(data + '\n');
    })

    response.on('end', function(){
      console.log('Response streamed');
    })
  })
};

getAndPrintHTMLChunks();