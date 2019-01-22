let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
let idValidator = require('mongoose-id-validator');

let subCategorySchema = new BaseSchema();

subCategorySchema.add({
  name: {type:String, unique:true, required:[true, 'name is required?']},
  category : {
    type: schema.Types.ObjectId,
    ref: "category",
    required: [true, "company is required?"]
  }
});

subCategorySchema.plugin(uniqueValidator);
subCategorySchema.plugin(idValidator);

module.exports = mongoose.model('subCategory', subCategorySchema, 'subCategory');