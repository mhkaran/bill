let mongoose = require('mongoose');
let util = require('util');

(function schema()  { 
        var BaseSchema =  function() {

            mongoose.Schema.call(this);
  
            this.add({
            creator:     {  
                type: schema.Types.ObjectId,
                ref: "user",
                required: [true, "creator is required?"] },
            modifier:    { 
                type: schema.Types.ObjectId,
                ref: "user",
                required: [true, "modifier is required?"]
             },
            createdDate:  { type: Date, default: Date.now},
            modifiedDate: { type: Date, index: true, default: Date.now},
            active:{type:Boolean, default:true},
            });
        }
        util.inherits(BaseSchema, mongoose.Schema);

})();