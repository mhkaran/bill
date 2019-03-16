const mapping = require('../database/mapping.js');
const appConst = require('../model/applicationConstant.js')
const modelDatabaseLayer = require('../database/entitylDatabaseLayer.js')
const crypto = require('../model/crypto')
const jwt = require('../model/jwt') 
const repo = require('../database/repository')

module.exports ={

    list : async (obj)=>{
        
        try{

            let entity = await mapping.blankUser();
            return await modelDatabaseLayer.list(entity,obj.filter,obj.value,[appConst.entity.region])             
        }
        catch(e){
            throw e;
        }

    },
    add : async  (obj)=>{
        try{
            let entity = await mapping.user(obj)
            entity.password = await crypto.genrateHashCode(entity.password);
            return await modelDatabaseLayer.add(entity);
        }
        catch(e){
            throw e;
        }
    },
    update : async (obj)=>{
        
        try{

            let entity = await mapping.blankUser();
            
            if (obj.value.password!=undefined)
            obj.value.password =  await crypto.genrateHashCode(obj.value.password)
            return await modelDatabaseLayer.update(entity,obj.filter,obj.value);
        }
        catch(e){
            console.log(e)
            throw e;
        }

    },
    remove : async (condition)=>{
        try{

            let entity = await mapping.blankUser();
            return await modelDatabaseLayer.remove(entity,condition)
        }
        catch(e){
            throw e;
        }
    },
    login : async (userInfo)=>{

        try {
            if (userInfo.password!=undefined && userInfo.userId !=undefined)
            {
                let auth = [{deleted:false,password:userInfo.password,userId:userInfo.userId}];

                let authUser = await repo.fetch(await mapping.blankUser(),auth,"_id userId firstName lastName passwordExpired",[]);   

                if (authUser.length==0)
                    throw 'userId or password is incorrect'
                else
                {
                    let userLoggedInData=await crypto.encrypt(JSON.stringify(
                        {
                            id:authUser[0]._id, userId:authUser[0].userId, firstName:authUser[0].firstName, 
                            lastName:authUser[0].lastName, passwordExpired:authUser[0].passwordExpired
                        }
                        ))
                    return jwt.getToken({data:userLoggedInData});
                }
            }
            else
                throw 'user info is mandatory'
        }
        catch(e)
        {
            throw e
        }
    
    }
}