module.exports = {
    entity : {
        category : 'category',
        company :  'company',
        enterprise : 'enterprise',
        package : 'package',
        packageHistory : 'packageHistory',
        region : 'region', 
        request : 'request',
        requestApprover : 'requestApprover',
        subCategory : 'subCategory', 
        user : 'user',
    },
    httpMehtod: {
        get:['list'],
        post : ['add','login'],
        put:['update'],
        delete : ['remove']
    },
    authenticationNotRequired:['login'],
    mongodb : {
        url : 'mongodb://localhost:27017/billtracker'
    },
    port : 3000,
    secretKey : 'akj#d52f*%f739',
    tokenExpireTime : 86400,
    app : 'billtracker'    
}