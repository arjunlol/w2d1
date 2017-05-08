var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

printLowerCase = function (data){
  console.log(data.replace(/a/ig, "4" )
    .replace(/e/ig, "3")
    .replace(/l/ig, "1")
    .replace(/o/ig, "0")
    .replace(/s/ig, "5")
    .replace(/t/ig, "7")
    .replace(/er/ig, "0r")
    .replace(/you/ig, "j00")
    .replace(/ck/ig, "x")
    );
}


getHTML(requestOptions, printLowerCase);