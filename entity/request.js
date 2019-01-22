let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let requestSchema = new BaseSchema();

requestSchema.add({
  title: {type:String, required:[true, 'title is required?']},
  description: {type:String, required:[true, 'description is required?']},
  file: {type:String},
  amount: {type: Number, required: [true, "amount is required?"]},
  approved:{type:Boolean},
  subCategory: {
      type:mongoose.Types.ObjectId,
      ref : 'subCategory',
      required:[true,'subCategory is required?']
    },
  user : {
    type: schema.Types.ObjectId,
    ref: "user",
    required: [true, "user is required?"]
  }
});

requestSchema.plugin(uniqueValidator);
requestSchema.plugin(idValidator);

module.exports = mongoose.model('request', requestSchema, 'request');