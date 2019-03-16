module.exports = {

    save : async (model)=>{
        
        try{
            return  await model.save()    
        }
        catch(e){
            throw e
        }
    },
    
    saveMany : async (model,data,opts)=>{

         try {

         await model.collection.insertMany(data,opts)
                 
         }
         catch(e)
         { 
            throw e
         }    
    },

    count : async(module,condition)=>{
        try{
            return await module.countDocuments(condition);
        }
        catch(e)
        {
            throw e
        }
    },
    update : async (model,condition,updatedValues)=>{

            try {
                let rtnData = await model.updateMany(condition, updatedValues,
                    {runValidators: true, context: 'query'})
                if (rtnData.nModified==0) throw "no record found for update request";
            }
            catch(e)
            {
                throw e;
            } 
    },

    fetch : async (model,condition,params,populate)=>{
       
        try {    
            model = model.find({$or:condition},params);
            populate.forEach((subTable)=>{
                model.populate(subTable,params);
              }); 
            
              return await model.exec();
            }
        catch(e){
            throw e
        }    
    },
    
    fetchById : async (model,id,params,populate) => {

        try {    
            
            model = model.findById(id,params);
            populate.forEach((subTable)=>{
                model.populate(subTable,params);
              }); 
            
              return await model.exec();
            }
        catch(e){
            throw e
        }    
    },

    fetchOne : async (model,condition,params,populate)=>{

        try {    
            
            model = model.findOne(condition,params);
            populate.forEach((subTable)=>{
                model.populate(subTable,params);
              }); 
            
              return await model.exec();
            }
        catch(e){
            throw e
        }    
    },

    delete : async (model,condition)=>{

        try {
           let data= await model.deleteMany(condition);
           if (data.n==0) throw "no record found for delete request";
        }
        catch(e)
        {
            throw e
        } 
    },

    deleteOne : async (model,condition)=>{

        try {
            console.log('2');
            let data= await model.deleteMany(condition);
            if (data.n==0) throw "no record found for delete request";
         }
         catch(e)
         {
             throw e
         }  
    }
}