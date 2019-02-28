let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema
let categorySchema = new schema({
  name: {type:String, unique:true, required:[true, 'name is required?']},
  region : {
    type: schema.Types.ObjectId,
    ref: "region",
    required: [true, "region is required?"]
  },
  creator:     {  
    type: schema.Types.ObjectId,
    ref: "user",
    default:null
  },
modifier:    { 
    type: schema.Types.ObjectId,
    ref: "user",
    default: null
 },
createdDate:  { type: Date, default: Date.now},
modifiedDate: { type: Date, index: true, default: Date.now},
active:{type:Boolean, default:true},
deleted : {type:Boolean, default:false}
});

categorySchema.plugin(uniqueValidator);
categorySchema.plugin(idValidator);

module.exports = mongoose.model('category', categorySchema, 'category');