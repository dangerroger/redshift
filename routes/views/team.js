var keystone = require('keystone');
exports = module.exports = function (req, res) {
var view = new keystone.View(req, res);
    var locals = res.locals;

    //set locals
    locals.section = 'team';
    // load Team
    view.query('teams',keystone.list('Team').model.find());
    //Render team page
    view.render('team');

                                                };
