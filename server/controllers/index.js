var models = require('../models');
var db = require('../db');

module.exports = {
  messages: {
    get: function (req, res) { 
      function sendResponse(res, data) {
        //console.log(data);
        res.send({results: data});
      }
      models.messages.get(sendResponse.bind(null, res));
      
      
    }, // a function which handles a get request for all messages
    
    post: function (req, res) {
      var data = '';
      
      req.on('data', function( chunk ) {
        data += chunk;
      });
      req.on('end', function() {
        req.rawBody = data;
        //console.log( 'on end: ', data, 'TYPEOF', typeof data );
        var params = [];
        req.body = data.split('&').forEach( item => params.push(item.split('=') ) );
        var paramsObj = {};
        params.forEach( item => { paramsObj[item[0]] = item[1]; });
        
        //console.log(paramsObj);
        function sendResponse(res){
          // console.log('inside post response callback ');
          // res.statusCode = 200;
          
          module.exports.messages.get(req, res);
          // res.send();
        }
        
        models.messages.post(paramsObj, sendResponse.bind(this, res));
        
      });
      //console.log('>>>>', data);
      
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      
    },
    
    post: function (req, res) {
      
    }
  }
};

