var keystone = require('keystone');
var team = keystone.list('team').model;
var handlers = {
  getteam: function(req, res) {
    team.find().exec(function(err, data) {
      if(err) {
        console.log(err);
        res.status(500).send('DB Error');
      }
res.status(200).send(data);
    });
  }
}
module.exports = handlers;
