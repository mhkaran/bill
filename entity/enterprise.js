let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');


let enterpriseSchema = new BaseSchema();

enterpriseSchema.add({
  code:{type:String, index: true, unique:true, required:[true, 'code is required?']},
  name: {type:String, required:[true, 'name is required?']}
});

enterpriseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('enterprise', enterpriseSchema, 'enterprise');