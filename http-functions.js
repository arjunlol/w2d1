module.exports = function getHTML (options, callback){
  var https = require('https');
  var output = "";
  https.get(options, function(response){
    response.setEncoding('utf-8');
    response.on('data',callback);
  });
};