module.exports = {
    entity : {
        designation : {path:'designation',model:'designation',
        populate: {
            path: 'subDesignation',
            model: 'subDesignation'
          }
        },
        user : {path:'user',model:'user'},
        subDesignation : {path:'subDesignation',model:'subDesignation'}
    },
    mongodb : {
        url : 'mongodb://localhost:27017/user'
    }    
}