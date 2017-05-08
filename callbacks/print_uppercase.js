var getHTML = require('../http-functions.js');

//transforms html string to all CAPS and prints to console

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

printUpperCase = function (html){
  console.log(html.toUpperCase());
}


getHTML(requestOptions, printUpperCase);