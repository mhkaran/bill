let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let requestApproverSchema = new schema({
  approved: {type:Boolean, default:null},
  comment: {type:String, default:null},
  request : {
    type: schema.Types.ObjectId,
    ref: "request",
    required: [true, "request is required?"]
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

requestApproverSchema.plugin(uniqueValidator);
requestApproverSchema.plugin(idValidator);

module.exports = mongoose.model('requestApprover', requestApproverSchema, 'requestApprover');