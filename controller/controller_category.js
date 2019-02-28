const mapping = require('../database/mapping.js');
const appConst = require('../model/applicationConstant.js')
const modelDatabaseLayer = require('../database/entitylDatabaseLayer.js')

module.exports ={

    list : async (obj)=>{
        
        try{

            let entity = await mapping.blankCategory();
            return await modelDatabaseLayer.list(entity,obj.filter,obj.value,[appConst.entity.company])
        }
        catch(e){
            throw e;
        }

    },
    add : async  (obj)=>{

        try{
            
            let entity = await mapping.category(obj)
            return await modelDatabaseLayer.add(entity);
        }
        catch(e){
            throw e;
        }

    },
    update : async (obj)=>{
        
        try{

           let entity = await mapping.blankCategory();
           return await modelDatabaseLayer.update(entity,obj.filter,obj.value);
        }
        catch(e){
            throw e;
        }

    },
    remove : async (condition)=>{
        try{

            let entity = await mapping.blankCategory();
            return await modelDatabaseLayer.remove(entity,condition)
        }
        catch(e){
            throw e;
        }

    }
}