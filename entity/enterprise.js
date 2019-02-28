let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let util = require('util')

const schema = mongoose.Schema
let enterpriseSchema = new schema({
  code:{type:String, index: true, unique:true, required:[true, 'code is required?']},
  name: {type:String, required:[true, 'name is required?']},
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
})

enterpriseSchema.plugin(uniqueValidator);

module.exports = mongoose.model('enterprise', enterpriseSchema, 'enterprise');