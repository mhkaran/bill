let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let packageHistorySchema = new  schema({
  startDate:{type:Date, index: true, required:[true, 'start date is required?']},
  endDate: {type:Date, required:[true, 'end date is required?']},
  region:{
    type:mongoose.Types.ObjectId,
    ref:'region',
    required: [true, "region is required?"]
    },
   package : {
    type:mongoose.Types.ObjectId,
    ref:'package',
    required: [true, "package is required?"]
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

packageHistorySchema.plugin(uniqueValidator);
packageHistorySchema.plugin(idValidator);

module.exports = mongoose.model('packageHistory', packageHistorySchema, 'packageHistory');