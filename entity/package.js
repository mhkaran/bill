let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');

let packageSchema = new BaseSchema();

packageSchema.add({
  name:{type:String, index: true, unique:true, required:[true, 'name is required?']},
  count: {type:Number, required:[true, 'count is required?'], min:100},
  amount: {type: Number, required: [true, "amount is required?"]
  }
});

packageSchema.plugin(uniqueValidator);

module.exports = mongoose.model('package', packageSchema, 'package');   