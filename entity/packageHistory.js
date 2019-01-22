let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let packageHistorySchema = new BaseSchema();

packageHistorySchema.add({
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
   } 
});

packageHistorySchema.plugin(uniqueValidator);
packageHistorySchema.plugin(idValidator);

module.exports = mongoose.model('packageHistory', packageHistorySchema, 'packageHistory');