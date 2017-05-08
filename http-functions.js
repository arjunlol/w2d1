module.exports = function getHTML (options, callback){
  var https = require('https');
  https.get(options, function(response){
    response.on('data',callback);
  })
};