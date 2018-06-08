var keystone = require('keystone');
var Types = keystone.Field.Types;

//create new list for mongoose schema

var Team = new keystone.List('Team');
// define list types for model

Team.add ({
    image: { type: Types.CloudinaryImage },
    name: { type: Types.Name, required: true},
  	email: { type: Types.Email},
    about:{type:String}
  });


Team.register();
