let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let companySchema = new schema({
  code:{type:String, index: true, required:[true, 'code is required?']},
  name: {type:String, required:[true, 'name is required?']},
  enterprise: {
    type: schema.Types.ObjectId,
    ref: "enterprise",
    required: [true, "enterprise is required?"]
  },
  creator:     {  
    type: schema.Types.ObjectId,
    ref: "user",
    default: null
  },
modifier:    { 
    type: schema.Types.ObjectId,
    ref: "user",
    default:null
 },
createdDate:  { type: Date, default: Date.now},
modifiedDate: { type: Date, default: Date.now},
active:{type:Boolean, default:true},
deleted : {type:Boolean, default:false}
});

companySchema.index({code: 1, enterprise: 1}, { unique: true});

companySchema.plugin(uniqueValidator, { message: 'expected to be unique'});
companySchema.plugin(idValidator);

module.exports = mongoose.model('company', companySchema, 'company');