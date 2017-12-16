var models = require('../models');

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
      console.log(req);
      
      res.send('test');
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

