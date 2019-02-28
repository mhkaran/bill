let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let regionSchema = new schema({
  name: {type:String, index: true, unique:true, required:[true, 'name is required?']},
  contactNo : {
      type:Number,
      required:[true,'contact no is required?'],
      maxlength:12,
      minlength:10
    },
  emailId: {
    type: String, 
    unique:true,
    required: [true, "emailId is required?"],
    validate: {
      validator: function(v) {
        return (/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/).test(v);
      },
      message: "Email is invalid"
    }
  },
  package : {
    type: schema.Types.ObjectId,
    ref: "package",
    required: [true, "package is required?"]
  },
  company:{
    type: schema.Types.ObjectId,
    ref: "company",
    required: [true, "company is required?"]
  },
  startDate : {type:Date,default:Date.now},
  endDate : {type:Date,
    default: function() {
           return new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      },
},
totalUserCount : {type:Number,min:0,require:[true,'user count is required?']},  
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

regionSchema.plugin(uniqueValidator);
regionSchema.plugin(idValidator);

module.exports = mongoose.model('region', regionSchema, 'region');