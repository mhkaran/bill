let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let categorySchema = new BaseSchema();

categorySchema.add({
  name: {type:String, unique:true, required:[true, 'name is required?']},
  region : {
    type: schema.Types.ObjectId,
    ref: "region",
    required: [true, "region is required?"]
  }
});

categorySchema.plugin(uniqueValidator);
categorySchema.plugin(idValidator);

module.exports = mongoose.model('category', categorySchema, 'category');