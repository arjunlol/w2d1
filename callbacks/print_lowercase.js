var getHTML = require('../http-functions');

//transforms html string to lower case and prints to console

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

printLowerCase = function (data){
  console.log(data.toLowerCase());
}


getHTML(requestOptions, printLowerCase);