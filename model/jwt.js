const jwt = require('jsonwebtoken');
const fs = require('fs');
const crypto = require('../model/crypto.js');

module.exports = {

    getToken: async (playLoad) =>{

        try{

        var verifyOptions = {expiresIn: '3600s',algorithm: "RS256" };

        const privateKey = fs.readFileSync(__dirname + '/private.key','utf8');
 
        return await  jwt.sign(playLoad, privateKey, verifyOptions);

        }
        catch(e)
        {
            console.log(e)
            throw 'Invalid Data'
        }
    },
    verifyToken : async (token)=>{
    
        try{
         
            if (token === "NoAuthenticationRequired")
            {
                var currentDate = new Date();
                currentDate.setHours(currentDate.getHours() + 1);
            return {
                id:null, userId:'Admin', firstName:'Admin', 
                lastName:'', passwordExpired:currentDate
            };
            }
            else
            {
                
            const publicKey = fs.readFileSync(__dirname + '/public.key','utf8');
            let userData =await  jwt.verify(token, publicKey, {algorithm: "RS256"});
            let data = await crypto.decrypt(userData.data)
            return data; 
            
            }
        }
        catch(e)
        {
            console.log(e)
            throw 'Invalid Token OR No token passed'
        }
    }
}