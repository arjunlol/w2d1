var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

printReverse = function (data){
  console.log(data.toLowerCase());
}


getHTML(requestOptions, printReverse);