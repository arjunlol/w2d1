var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

printReverse = function (data){
  console.log(data.split("").reverse().join(""));
}


getHTML(requestOptions, printReverse);