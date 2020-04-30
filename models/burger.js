var orm = require ('../config/orm.js')

var burger = {

    selectAll(cb){
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    
    insertOne(cols, vals, cb){
        orm.create('burgers', cols, vals, function(res){
            cb(res);
        });
    },

    updateOne(objColVals, condition, cb){
        orm.updateOne('burgers', objColVals, condition, function(res){
            cb(res);
        });
    },
};

module.exports = burger;