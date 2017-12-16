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
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

