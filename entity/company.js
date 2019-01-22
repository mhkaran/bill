let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let companySchema = new BaseSchema();

 companySchema.add({
  code:{type:String, index: true, unique:true, required:[true, 'code is required?']},
  name: {type:String, required:[true, 'name is required?']},
  enterprise: {
    type: schema.Types.ObjectId,
    ref: "enterprise",
    required: [true, "enterprise is required?"]
  }
});

companySchema.plugin(uniqueValidator);
companySchema.plugin(idValidator);

module.exports = mongoose.model('company', companySchema, 'company');