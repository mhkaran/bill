const repo = require('./repository.js');
const staticFunc = require('../model/staticFunc.js');

module.exports= {

    list: async (model,filter,value,populate)=>
    {
        try
        {
            filter.forEach(element => {
                element.deleted=false;    
            });
             
            return await repo.fetch(model,filter,value,populate);
        }
        catch(e)
        {
            throw e;
        }
    },

    add : async (model)=>
    {
        try
        {
            return await repo.save(model);
        }
        catch(e)
        {
            throw e;
        }
    },

    update : async (model,filter,value)=>
    {
        try 
        {
            if (filter==undefined || staticFunc.isJsonEmpty(filter)) throw 'filter should not be empty';

            else if (value==undefined || staticFunc.isJsonEmpty(value)) throw 'value should not be empty';

            filter.deleted=false;

            let checkCount = await checkEntityCount(model,filter)

            if (checkCount==0)
                throw 'no record found for update request'
            else if (checkCount==1)
                return await repo.update(model,filter,value);
            else
                throw 'update request should not be for more then one record'
        }
        catch(e)
        {
            throw e
        }
    },
    
    remove : async (model,condition)=>
    {
        try
        {
            if (condition==undefined ||staticFunc.isJsonEmpty(condition)) throw 'condition should not be empty';

            let checkCount = await checkEntityCount(model,condition)

            if (checkCount==0)
                throw 'no record found for remove request'
            else if (checkCount==1)    
                return await repo.update(model,condition,{deleted:true});
            else 
                throw 'remove request should not be for more then one record'
        }
        catch(e)
        {
            throw e;
        }
    }
}

async function checkEntityCount(model,condition)
    {
        return await repo.count(model,condition)
    }