let enterprise = require('../entity/enterprise.js');
let company = require('../entity/company.js');
let category = require('../entity/category.js');
let subCategory = require('../entity/subCategory.js');
let package = require('../entity/package.js');
let packageHistory = require('../entity/packageHistory.js');
let region = require('../entity/region.js');
let request = require('../entity/request.js');
let requestApprover = require('../entity/requestApprover.js');
let user = require('../entity/user.js');
let mongoose = require('mongoose');

module.exports ={

    enterprise : (obj)=>{

        return new Promise((resolve,reject)=>{

            enterpriseObj = new enterprise({
                code : obj.code,
                name : obj.name,
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
                    enterpriseObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
                    enterpriseObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (enterpriseObj.active == undefined || enterpriseObj.active == null) 
            delete enterpriseObj.active;
            
            resolve(enterpriseObj);   
        })
    },

    blankEnterprise : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(enterprise);
        });
    },

    company : (obj)=>{

        return new Promise((resolve,reject)=>{

            companyObj = new company({
                code : obj.code,
                name : obj.name,
                active : obj.active,
                enterprise : mongoose.Types.ObjectId(obj.enterprise)
            });

            if (obj.creator !=null || obj.creator != undefined)
            companyObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            companyObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (companyObj.active == undefined || companyObj.active == null) 
            delete companyObj.active;
            
            resolve(companyObj);   
        })
    },

    blankcompany : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(company);
        });
    },

    category : (obj)=>{

        return new Promise((resolve,reject)=>{

            categoryObj = new category({
                name : obj.name,
                active : obj.active,
                region : mongoose.Types.ObjectId(obj.region)
            });

            if (obj.creator !=null || obj.creator != undefined)
            categoryObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            categoryObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (categoryObj.active == undefined || categoryObj.active == null) 
            delete categoryObj.active;
            
            resolve(categoryObj);   
        })
    },

    blankcategory : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(category);
        });
    },

    subCategory : (obj)=>{

        return new Promise((resolve,reject)=>{

            subCategoryObj = new subCategory({
                name : obj.name,
                active : obj.active,
                category : mongoose.Types.ObjectId(obj.category)
            });

            if (obj.creator !=null || obj.creator != undefined)
            subCategoryObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            subCategoryObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (subCategoryObj.active == undefined || subCategoryObj.active == null) 
            delete subCategoryObj.active;
            
            resolve(subCategoryObj);   
        })
    },

    blanksubCategory : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(subCategory);
        });
    },

    package : (obj)=>{

        return new Promise((resolve,reject)=>{

            packageObj = new package({
                name : obj.name,
                count : obj.count,
                amount : obj.amount,
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            packageObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            packageObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (packageObj.active == undefined || packageObj.active == null) 
            delete packageObj.active;
            
            resolve(packageObj);   
        })
    },

    blankpackage : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(package);
        });
    },

    packageHistory : (obj)=>{

        return new Promise((resolve,reject)=>{

            packageHistoryObj = new packageHistory({
                startDate : obj.startDate,
                endDate : obj.endDate,
                region : mongoose.Types.ObjectId(obj.region),
                package : mongoose.Types.ObjectId(obj.package),
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            packageHistoryObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            packageHistoryObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (packageHistoryObj.active == undefined || packageHistoryObj.active == null) 
            delete packageHistoryObj.active;
            
            resolve(packageHistoryObj);   
        })
    },

    blankpackageHistory : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(packageHistory);
        });
    },

    region : (obj)=>{

        return new Promise((resolve,reject)=>{

            regionObj = new region({
                name : obj.name,
                contactNo : obj.contactNo,
                emailId : obj.emailId,
                package : mongoose.Types.ObjectId(obj.package),
                startDate : obj.startDate,
                endDate : obj.endDate,
                totalUserCount : obj.totalUserCount,
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            regionObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            regionObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (regionObj.active == undefined || regionObj.active == null) 
            delete regionObj.active;
            
            resolve(regionObj);   
        })
    },

    blankregion : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(region);
        });
    },

    request : (obj)=>{

        return new Promise((resolve,reject)=>{

            requestObj = new request({
                title : obj.title,
                description : obj.description,
                file : obj.file,
                amount : obj.amount,
                approved : obj.approved,
                subCategory : mongoose.Types.ObjectId(obj.subCategory),
                user : mongoose.Types.ObjectId(obj.user),
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            requestObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            requestObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (requestObj.active == undefined || requestObj.active == null) 
            delete requestObj.active;
            
            resolve(requestObj);   
        })
    },

    blankrequest : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(request);
        });
    },

    requestApprover : (obj)=>{

        return new Promise((resolve,reject)=>{

            requestApproverObj = new requestApprover({
                request : mongoose.Types.ObjectId(obj.request),
                user : mongoose.Types.ObjectId(obj.user),
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            requestApproverObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            requestApproverObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (requestApproverObj.active == undefined || requestApproverObj.active == null) 
            delete requestApproverObj.active;
            
            resolve(requestApproverObj);   
        })
    },

    blankrequest : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(requestApprover);
        });
    }, 

    user : (obj)=>{

        return new Promise((resolve,reject)=>{

            userObj = new user({
                userId : obj.userId,
                lastLogin : obj.lastLogin,
                managerLimit : obj.managerLimit,
                emailId : obj.emailId,
                mobile : obj.mobile,
                password : obj.password,
                region : mongoose.Types.ObjectId(obj.region),
                manager : mongoose.Types.ObjectId(obj.manager),
                active : obj.active
            });

            if (obj.creator !=null || obj.creator != undefined)
            userObj.creator = mongoose.Type.ObjectId(obj.creator);
            
            if (obj.modifier !=null || obj.modifier != undefined)
            userObj.modifier = mongoose.Type.ObjectId(obj.modifier);

            if (userObj.active == undefined || userObj.active == null) 
            delete userObj.active;
            
            resolve(userObj);   
        })
    },

    blankuser : ()=>{
        return new Promise((resolve,reject)=>{
            resolve(user);
        });
    }    
}