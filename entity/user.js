let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let schema = mongoose.Schema

let userSchema = new schema({
  userId:{type:String, index: true, unique:true, required:[true, 'user Id is required']},
  isAdmin: { type: Boolean, default: false },
  firstName: {type:String,required:[true,'last name is required!']},
  lastName: {type:String,required:[true,'first name is required!']},
  token:{type:String},
  lastLogin:{type:Date,default:Date.now},
  managerLimit:{type:Number,required:[true,'please set immediate approval limit!']},
  emailId: {
    type: String, 
    unique:true,
    required: [true, "emailId is required!"],
    validate: {
      validator: function(v) {
        return (/[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/).test(v);
      },
      message: "Email is invalid"
    }
  },
  mobile:{
    type:Number,
    required:[true,'mobile no is required!'],
    maxlength:10,
    minlength:10
  },
  password: {
      type:String, 
      required:[true,'password is required']//,
      // validate :{
      //   validator :function(v){
      //       return (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).test(v);
      //   },
      //   message:'password is not strong enough!'
      // }
    },
    region:{
        type:mongoose.Types.ObjectId,
        ref:'region',
        required: [true, "region is required!"]
    },
    manager:{
        type:mongoose.Types.ObjectId,
        ref:'user',
        default:null
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
    passwordExpiryDate:{type:Date,default:new Date(new Date().setMonth(new Date().getMonth()+1))},
    createdDate:  { type: Date, default: Date.now},
    modifiedDate: { type: Date, index: true, default: Date.now},
    active:{type:Boolean, default:true},
    deleted : {type:Boolean, default:false}
});

userSchema.plugin(uniqueValidator);
userSchema.plugin(idValidator);

module.exports = mongoose.model('user', userSchema, 'user');   