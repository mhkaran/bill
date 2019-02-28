let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let requestSchema = new schema({
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
  },
  creator:     {  
    type: schema.Types.ObjectId,
    ref: "user",
    default:null
  },
  modifier:    { 
    type: schema.Types.ObjectId,
    ref: "user",
    default:null
  },
  createdDate:  { type: Date, default: Date.now},
  modifiedDate: { type: Date, index: true, default: Date.now},
  active:{type:Boolean, default:true},
  deleted : {type:Boolean, default:false}
});

requestSchema.plugin(uniqueValidator);
requestSchema.plugin(idValidator);

module.exports = mongoose.model('request', requestSchema, 'request');