var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      return db.connection.query('SELECT * FROM users INNER JOIN messages ON (users.id = messages.id_users) INNER JOIN room;', function(error, results){
        if (error) { throw error; }
        // console.log(results);
        cb(results);
      });
    }, // a function which produces all the messages
    post: function (obj, cb) {
      var messageText = obj.text.split('+').join(' ');
      
      
      // return db.connection.query("INSERT INTO `messages` (`text`,`id_users`,`id_room`) VALUES (\'" + name + "\','6','1');", function(error, results){
      //   if (error) 
      //     throw error;
      //   cb();
      // });
      
      return db.connection.query("INSERT INTO `users` (`username`) VALUES (\'" + obj.username + "\');", function(error, results){
        if (error) {
          throw error;
        }
        return db.connection.query("INSERT INTO `messages` (`text`,`id_users`,`id_room`) VALUES (\'" + messageText + "\',(SELECT users.id FROM users WHERE username = \'" + obj.username + "\'),'1');", function(error, results){
          if(error) {
            throw error;
          }
          console.log('success you are a sql wizard');
          cb();
        });
        
        
        
        
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

