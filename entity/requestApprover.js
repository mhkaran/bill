let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let requestApproverSchema = new BaseSchema();

requestApproverSchema.add({
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
});

requestApproverSchema.plugin(uniqueValidator);
requestApproverSchema.plugin(idValidator);

module.exports = mongoose.model('requestApprover', requestApproverSchema, 'requestApprover');