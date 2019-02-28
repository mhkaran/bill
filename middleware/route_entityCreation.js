const category =  require('../controller/controller_category.js')
const subCategory = require('../controller/controller_subCategory.js')
const company =  require('../controller/controller_company.js')
const enterprise = require('../controller/controller_enterprise.js')
const package = require('../controller/controller_package.js')
const packageHistory = require('../controller/controller_packageHistory.js')
const region = require('../controller/controller_region.js')
const request = require('../controller/controller_request.js')
const requestApprover = require('../controller/controller_requestApprover.js')
const user = require('../controller/controller_user.js')
const appConst = require('../model/applicationConstant.js')
const jwt = require('../model/jwt')

module.exports = async (req,res,next)=>{

    try {
        
        const actionMethod =  req.originalUrl.split('/')[3].toLowerCase();

        if (!appConst.authenticationNotRequired.includes(actionMethod))
        {
            let userInfo = await jwt.verifyToken(req.headers.token);
            if (userInfo==undefined)
                res.status(403).end('authentication failed!');
            else
                req.userInfo = userInfo 
        }

        req.entity = req.originalUrl.split('/')[2].toLowerCase();
                
        if (req.entity == appConst.entity.enterprise)
            req.controller = enterprise
        else if (req.entity == appConst.entity.company)
            req.controller = company
        else if (req.entity == appConst.entity.category)
            req.controller = category    
        else if (req.entity == appConst.entity.package)
            req.controller = package        
        else if (req.entity == appConst.entity.region)
            req.controller = region
        else if (req.entity == appConst.entity.subCategory)
            req.controller = subCategory
        else if (req.entity == appConst.entity.packageHistory)
            req.controller = packageHistory
        else if (req.entity == appConst.entity.request)
            req.controller = request
        else if (req.entity == appConst.entity.requestApprover)
            req.controller = requestApprover
        else if (req.entity == appConst.entity.user)
            req.controller = user              

        if (typeof req.controller[actionMethod] == "function")    
         {   
             req.actionMethod=actionMethod        
             next();    
         }
        else 
        res.status(404).end('Bad url!');
    }
    catch(e) 
    {
        console.log(e)
        res.status(404).end(JSON.stringify(e));
    }    
        
}