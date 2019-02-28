let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');


let schema = mongoose.Schema

let packageSchema = new schema({
  name:{type:String, index: true, unique:true, required:[true, 'name is required?']},
  count: {type:Number, required:[true, 'count is required?'], min:100},
  amount: {type: Number, required: [true, "amount is required?"]
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

packageSchema.plugin(uniqueValidator);

module.exports = mongoose.model('package', packageSchema, 'package');   